import { useParams } from 'react-router-dom';

const contactList = [
  {
    name: "John",
    number: "098 2903 2394",
  },
  {
    name: "Jack",
    number: "028 9203 3431",
  },
  {
    name: "Paul",
    number: "089 1283 5331",
  },
]

const Contacts = () => {
  const { id } = useParams()
  const contact = contactList.find((val, idx) => idx == id)
  return (
    <>
      <h1 className='text-3xl'>Contacts</h1>
      { contact && <h1 className='text-2xl'>{contact.name}: {contact.number}</h1>}
    </>
  );
}

export default Contacts;
