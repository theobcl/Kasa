import { plantList } from '../datas/plantList'
import { CareScale } from '../components/CareScale'

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
					<li key={plant.id}>{plant.name} {plant.isBestSale ? <span>🔥</span> : null}</li>
				))}
			</ul>
		</div>
  )
}

export default Cart
