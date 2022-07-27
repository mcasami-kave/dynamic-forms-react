import { Field } from "../../interfaces/form.interface";

interface FormFieldProps {
    field: Field;
}

function FormField({ field }: FormFieldProps): JSX.Element {
    const {id, label, placeholder, type, value, validationType, validations} = field;
    return <div style={{paddingTop: 5}}>
        <label htmlFor={id} style={{paddingRight: 20}}>{label}:</label>
        <input type={type} id={id} name="fname" placeholder={placeholder}></input><br />
    </div>;
}

interface DynamicFormProps {
    fields: any[];
    onSubmit: (value: any) => void;
}

function DynamicForm({ fields, onSubmit}: DynamicFormProps) : JSX.Element {
    return (
        <form onSubmit={onSubmit}>
            {
               fields.map((field: Field) => <FormField key={field.id} {...{field}} />) 
            }
            <br />
            <input type="submit" value="Guardar" />
        </form>
    )
}

export default DynamicForm;