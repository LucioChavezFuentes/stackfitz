import UpdateProduct from '../components/UpdateProduct';
import ClientOnly from '../components/ClientOnly';

export default function UpdatePage({ query }) {
  console.log(query);
  return (
    <div>
      <ClientOnly>
        <UpdateProduct id={query.id} />
      </ClientOnly>
    </div>
  );
}
