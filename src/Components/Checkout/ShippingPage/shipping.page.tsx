import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form"
import './shipping.page.css'
import { useLocalStorage } from '../../../Context/context';
import { v4 } from 'uuid';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface DestinationInfo {
    id: string
    name: string
    surName: string
    phoneNumber: string
    cpf: string
    cep: string
    address: string
    addressNumber: string
    complement: string
    neighbourhood: string
    city: string
    uf: string
}

interface ShippingProps extends DestinationInfo {
    handleStateChange: () => void;
}

function ShippingPage(props: ShippingProps) {
    const {handleAddDestination, handleRemoveDestination, destinations} = useLocalStorage()
    const {register, setFocus, setValue, handleSubmit} = useForm()
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectWarning, setSelectWarning] = useState(false)

    const [selectDestination, setSelectDestination] = useState(() => {
        const savedCount = localStorage.getItem('selectedShippingAddress');
        return savedCount !== null ? parseInt(savedCount) : -1;
      });

    useEffect(() => {
        localStorage.setItem('selectedShippingAddress', selectDestination.toString());
      }, [selectDestination]);
    
    const handleCreateAddressModal = () => {
        setModalIsOpen(!modalIsOpen);
    };

    const advanceToNextPage = () => {
        if(selectDestination > -1) {
            props.handleStateChange()
            console.log(selectDestination)
        } else {
            setSelectWarning(true)
        }
    }
    
    const onSubmit = () => {
        handleAddDestination(destination)

        //CLEAR INPUT VALUES AFTER SUBMIT
        setValue('name', '');
        setValue('surname', '');
        setValue('phoneNumber', '');
        setValue('cpf', '');
        setValue('cep', '');
        setValue('address', '')
        setValue('addressNumber', '')
        setValue('complement', '')
        setValue('neighbourhood', '')
        setValue('city', '')
        setValue('uf', '')
        setValue('country', '')

        setModalIsOpen(false)
    }
    
    //ADDRESS OBJECT SET METHOD
    const [destination, setDestination] = useState<DestinationInfo>({
        id: props.id,
        name: props.name,
        surName: props.surName,
        phoneNumber: props.phoneNumber,
        cpf: props.cpf,
        cep: props.cep,
        address: props.address,
        addressNumber: props.addressNumber,
        complement: props.complement,
        neighbourhood: props.neighbourhood,
        city: props.city,
        uf: props.uf
    })
    
    //---------------------METHODS TO HANDLE INPUT CHANGES---------------------
    
    //NAME
    const [name, setName] = useState('')
    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
        };


        //SURNAME
        const [surName, setSurName] = useState('')
        const handleChangeSurName = (event: React.ChangeEvent<HTMLInputElement>) => {
            setSurName(event.target.value);
        };

        
        //PHONE NUMBER
        const [phoneNumber, setPhoneNumber] = useState('');
        const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const formattedValue = (event.target.value).replace(/\D/g, '')
            .replace(/^(\(\d{2}\)) (\d{5})/, '$1 $2-') 
            .replace(/(\d{2})\s?(\d{5})\s?(\d{4})/, '$1 $2-$3'); 
            
            setPhoneNumber(formattedValue);
        };
        
        //CPF
        const [CPF, setCPF] = useState('');
        const handleCPFChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const inputValue = event.target.value;
            
            const numericValue = inputValue.replace(/\D/g, '');
            
            let formatted = '';
            for (let i = 0; i < numericValue.length; i++) {
                if (i % 3 === 0 && i !== 0 && i !== numericValue.length - 2) {
                    formatted += '.';
                } else if (i === numericValue.length - 2) {
                    formatted += '-';
                }
                formatted += numericValue[i];
            }
            
            setCPF(formatted);
        };
        
        //CEP
        const [CEP, setCEP] = useState('');
        const HandleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const formattedValue = (event.target.value).replace(/\D/g, '')
            .replace(/(\d{5})(\d+)/, '$1-$2'); 
            
            setCEP(formattedValue);
        };
        //CEP API
        const checkCEP = (e: React.FocusEvent<HTMLInputElement>) => {
            if (e.target.value) {
                const cep = e.target.value.replace(/\D/g,'')
                fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
                    
                    //SET VALUES FOR INPUT TAGS
                    setValue('name', name)
                    setValue('surname', surName)
                    setValue('phoneNumber', phoneNumber)
                    setValue('cpf', CPF)
                    setValue('cep', data.cep)
                    setValue('address', data.logradouro)
                    setValue('neighbourhood', data.bairro)
                    setValue('city', data.localidade)
                    setValue('uf', data.uf)
                    setValue('country', 'Brasil')
                    setFocus('addressNumber')
                    
                    //SET VALUES FOR ADDRESS OBJECT
                    setDestination({
                            id: v4(),
                            name: name,
                            surName: surName,
                            phoneNumber: phoneNumber,
                            cpf: CPF,
                            cep: data.cep,
                            address: data.logradouro,
                            addressNumber: addressNumber,
                            complement: complement,
                            neighbourhood: data.bairro,
                            city: data.localidade,
                            uf: data.uf
                        })
                    })
                    .catch((err) => console.log(err));
                }
            }

        //ADDRESS NUMBER 
        const [addressNumber, setaAdressNumber] = useState('')
        const handleChangeAddressNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
            if (/^\d*$/.test(event.target.value)) {
              setaAdressNumber(event.target.value);
            }
        };
        
        //COMPLEMENT
        const [complement, setComplement] = useState('')
        const handleChangeComplement = (event: React.ChangeEvent<HTMLInputElement>) => {
            setComplement(event.target.value);
        };
        
        //---------------------------------------------------------------
        
        return(
            <div>
                <div className='destination-card-container'>
                    {destinations && destinations.map((destination, index) => (
                        <div className='destination-card' onClick={() => setSelectDestination(index)}>
                            {selectDestination === index && (
                                <FontAwesomeIcon icon={faSquareCheck} style={{float:'right', color:'#000000'}} />
                            )}
                            <div className='d-flex'>
                                <div style={{marginRight:"2%"}}>{destination.name}</div>
                                <div>{destination.surName}</div>
                            </div>
                            <div className='mb-2'>{destination.phoneNumber}</div>
                            <div className='mb-2'>{destination.cpf}</div>
                            <div className='mb-2'>{destination.cep}</div>
                            <div className='mb-2'>{destination.address}</div>
                            <div className='mb-2'>{destination.addressNumber}</div>
                            <div className='mb-2'>{destination.complement}</div>
                            <div className='mb-2'>{destination.neighbourhood}</div>
                            <div className='mb-2'>{destination.city}</div>
                            <div className='mb-2'>{destination.uf}</div>
                            <div className='add-address-button' style={{width:"80%"}} onClick={() => handleRemoveDestination(destination)}>Remover endereço</div>
                        </div>
                    ))}
                </div>
                <div className='add-address-button' onClick={handleCreateAddressModal}>Adicionar endereço {modalIsOpen? ( <>-</>) : (<>+</>)}</div>
                {modalIsOpen && (
                    <form className='form-group' onSubmit={handleSubmit(onSubmit)}>
                        <div className='form-container'>
                            <div className='input-group'>
                                <h4 className='fs-6'>Nome</h4>
                                <input className="form-control form-control-sm" id='form-input' type="text" {...register("name")} value={name} onChange={handleChangeName}/>
                                <h4 className='fs-6'>Sobrenome</h4>
                                <input className="form-control form-control-sm" id='form-input' type="text" {...register("surname")} value={surName} onChange={handleChangeSurName}/>
                                <h4 className='fs-6'>Número de telefone</h4>
                                <input className="form-control form-control-sm" id='form-input' type="text" {...register("phoneNumber")} value={phoneNumber} onChange={handlePhoneNumberChange} maxLength={13}/>
                                <h4 className='fs-6'>CPF</h4>
                                <input className="form-control form-control-sm" id='form-input' type="text" {...register("cpf")} value={CPF} onChange={handleCPFChange} maxLength={15}/>
                                <h4 className='fs-6'>CEP</h4>
                                <input className="form-control form-control-sm" id='form-input' type="text" {...register("cep")} value={CEP} onChange={HandleCepChange} maxLength={9} onBlur={checkCEP}/>
                                <h4 className='fs-6'>Endereço</h4>
                                <input className="form-control form-control-sm" id='form-input' type="text" {...register("address")}/>
                            </div>
                            <div className='input-group'>
                                <h4 className='fs-6'>Número</h4>
                                <input className="form-control form-control-sm" id='form-input' type="text" {...register("addressNumber")} value={addressNumber} onChange={handleChangeAddressNumber}/>
                                <h4 className='fs-6'>Complemento</h4>
                                <input className="form-control form-control-sm" id='form-input' type="text" {...register("complement")} value={complement} onChange={handleChangeComplement}/>
                                <h4 className='fs-6'>Bairro</h4>
                                <input className="form-control form-control-sm" id='form-input' type="text" {...register("neighbourhood")}/>
                                <h4 className='fs-6'>Cidade</h4>
                                <input className="form-control form-control-sm" id='form-input' type="text" {...register("city")}/>
                                <h4 className='fs-6'>Estado</h4>
                                <input className="form-control form-control-sm" id='form-input' type="text" {...register("uf")}/>
                                <h4 className='fs-6'>País</h4>
                                <input className="form-control form-control-sm" id='form-input' type="text" {...register("country")}/>
                            </div>
                        </div>
                        <div className='d-flex flex-row'>
                            <button className='handle-form-button' type='submit'>Enviar aqui</button>
                            <div className='handle-form-button mx-3' onClick={handleCreateAddressModal}>Cancelar</div>
                        </div>
                    </form>
                )}
                {selectWarning && (
                    <div className='text-danger'>Por favor selecione um ponto de entrega</div>
                )}
                <div className='advance-button' onClick={advanceToNextPage}>Avançar</div>
            </div>
    )
}

export default ShippingPage;