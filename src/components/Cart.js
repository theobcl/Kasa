import { plantList } from '../datas/plantList'

function Cart() {
  const categories = plantList.reduce(
		(accumulator, plant) =>
			accumulator.includes(plant.category) ? accumulator : accumulator.concat(plant.category),
		[]
	)

  return (
    <div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul>
				{plantList.map((plant) => (
					<li key={plant.id}>{plant.name}</li>
				))}
			</ul>
		</div>
  )
}

export default Cart
