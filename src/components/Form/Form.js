import { useFormContext } from '../../Context/formContext'
import './form.css'

export default function Form() {
    const { 
        handleOnChange, 
        handleBlur, 
        handleOnSubmit,
        error, 
        formData,
        validationFields
    } = useFormContext();

    return (
        <>
            <div class="row">
                <form onChange={handleOnChange} class="col s6">
                    <div class="row">
                        <div class="input-field col s6">
                            <input
                                id="last_name"
                                type="text"
                                className="validate"
                                name='name'
                                value={formData.name}
                                onBlur={handleBlur}
                            />
                            {error.name && <p className="alert">{error.name}</p>}
                            <label for="last_name">Full name</label>
                        </div>
                        <div class="input-field col s6">
                            <input
                                id="last_name"
                                type="text"
                                className="validate"
                                name='cel'
                                value={formData.cel}
                                onBlur={handleBlur}
                            />
                            {error.cel && <p className="alert">{error.cel}</p>}
                            <label for="last_name">Phone</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input 
                                id="email" 
                                type="email" 
                                className="validate"
                                name="email"
                                value={formData.email}
                                onBlur={handleBlur}
                            />
                            {error.email && <p className="alert">{error.email}</p>}
                            <label for="email">Email</label>
                        </div>
                    </div>
                    <button type="submit" onClick={validationFields} className="btn-small deep-orange accent-1">Crear orden</button>
                </form>
            </div>
        </>
    )
}