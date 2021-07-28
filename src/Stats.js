const Stats = ({stat}) =>{
	return(
		<div className="stats">
			<h2>STATISTICS</h2>
			<span>Total bikes: <b >{stat.total}</b></span><br/>
			<span>Available bikes: <b >{stat.available}</b></span><br/>
			<span>Booked bikes: <b >{stat.booked}</b></span><br/>
			<span>Average bike cost: <b >{stat.average.toFixed(2)}</b> UAH/hr.</span>
		</div>
	)
}
export default Stats