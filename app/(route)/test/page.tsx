
import DataFetching from '@/lib/dataFetching'


export default async function Test() {
 
  return <div>
  <h1>Testing Route</h1>
  {data.map((item, index) => (
    <div key={index}>
      <h2>{item.name}</h2>
      <p>Price: {item.price}</p>
    </div>
  ))}
</div>
}

