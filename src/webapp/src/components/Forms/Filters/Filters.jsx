import './Filters.css'

import { useState } from 'react'

import { distanceConversion } from '../../../utils/distanceConversion'

export default function Filters() {
    const [filtersVisible, setFiltersVisible] = useState(true)

    const [formData, setFormData] = useState({
        tags: '',
        location: '',
        distance: 200,
        priceMin: 0,
        priceMax: undefined,
        type: {
            store: false,
            product: true,
        }
    })

    const handleChange = (e) => {
        if (e.target.type === "checkbox") {
            setFormData((prevFormData) => ({
                ...prevFormData,
                type: {
                    ...prevFormData.type,
                    [e.target.name]: !prevFormData.type[e.target.name]
                },
            }))
        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [e.target.name]: e.target.value,
            }))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        setFiltersVisible(false);
    }

    const toggleFilters = () => {
        setFiltersVisible(prevState => !prevState)
    }

    return (
        <div 
            className={`
                filters 
                ${filtersVisible ? '' : 'filters--toggle'}
        `}>
            <form 
                onSubmit={handleSubmit}
                className={`filters__form`}
            >
                <label htmlFor="tags">
                    <input 
                        type="search" 
                        id='tags' 
                        name='tags'
                        placeholder='Que recherchez-vous ?'
                        maxLength='30'
                        autoComplete='true'
                        value={formData.tags}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="location">
                    <input 
                        type="text" 
                        id='location' 
                        name='location'
                        placeholder='Saisissez une ville.'
                        maxLength='30'
                        autoComplete='true'
                        value={formData.location}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="distance">
                    Distance
                    <input 
                        type="range"
                        id='distance'
                        name='distance' 
                        min='0'
                        max='200'
                        step='40'
                        default='200'
                        value={formData.distance}
                        onChange={handleChange}
                    />
                    <span>{distanceConversion(formData.distance)}km</span>
                </label>
                <label htmlFor="priceMin">
                    <input 
                        type='number'
                        id='priceMin'
                        name='priceMin'
                        min='0'
                        max={formData.priceMax !== '' && formData.priceMax}
                        placeholder='€ min'
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="priceMax">
                    <input 
                        type="number" 
                        id='priceMax'
                        name='priceMax'
                        min='0'
                        placeholder='€ max'
                        onChange={handleChange}
                    />
                </label>
                <fieldset>
                    <legend>Catégorie</legend>
                    <label htmlFor="store">
                        Store
                        <input 
                            type="checkbox"
                            id='store'
                            name='store'
                            checked={formData.type.store}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="product">
                        Produit
                        <input 
                            type="checkbox"
                            id='product'
                            name='product'
                            checked={formData.type.product}
                            onChange={handleChange}
                        />
                    </label>
                </fieldset>
                <input type="submit" value="Rechercher" /> 
            </form>
            <div className='filters__form-toggler'>
                <button onClick={toggleFilters}>
                    Filtres
                    <span 
                        className={`
                            filters__form-toggler__angle-ctn
                            ${filtersVisible ? '' : 'filters__form-toggler__angle-ctn--toggle'}
                        `}>
                        <i className="fa-solid fa-angle-up"></i>
                    </span>  
                </button>
            </div>
        </div>
    )
}