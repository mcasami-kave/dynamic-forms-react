import DynamicForm from './components/DynamicForm';
import loginForm from './assets/formFields.json'
import { Field, FormFields } from './interfaces/form.interface';

enum Store {
  SPAIN = 'es',
  KOREA = 'kr',
  ITALIA = 'it'
}

const getFormFieldsByStore = (form: FormFields, store: string): Field[] => { 
  return form.custom ? [...form.generic, ...form.custom[store] || []] : [...form.generic];
};

const getFieldsOrderIdsByStore = (fields: Field[], fieldsOrderByDefault: string[]): string[] => {
  const fieldIds: string[] = fields.map(field => field.id);
  return fieldsOrderByDefault.filter((orderId: string) => fieldIds.includes(orderId));
}

const sortFieldsByStore = (fields: Field[], fieldsOrderIds: any): Field[] => {
  const order: any = {};
  fieldsOrderIds.forEach((fieldId, i) => order[fieldId] = i);
  return fields.sort((a, b) => order[a.id] - order[b.id]);
}

function App() {
  const actualStore: Store = Store.KOREA;
  const fields: Field[] = getFormFieldsByStore(loginForm, actualStore);
  const fieldsOrderIds: string[] = getFieldsOrderIdsByStore(fields, loginForm.fieldsOrder);
  const sortedFields: Field[] = sortFieldsByStore(fields, fieldsOrderIds);

  const onSubmit = (value: any) => console.log(value);
  
  return (
    <div>
      <DynamicForm {...{fields: sortedFields, onSubmit}}/>
      <span>Login with google</span>
    </div>
  );
}

export default App;
