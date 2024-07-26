import React from 'react'

const CardLists = ({data}) => {
  return (
	<div className="col-lg-12 grid-margin stretch-card">
		<div className='card' style={{boxShadow : "0 0 10px #041a16"}}>
		
		<div className='mt-4' style={{padding : '20px'}}>
			<div class="three">
				<h2 style={{color : '#d18a49'}}>Districts Covered</h2>
			</div>
		</div>

		<div className='row mx-1 mb-5'>
			{
				data.map((item, index) => 
					<div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 grid-margin stretch-card" key={index}>
						<div class="card shadow-lg card-style" style={{borderRadius : '30px', border : 'none'}}>
							<div class="card-body p-0"><img src={item.image} alt="" class="w-100 card-img-top"/>
								<div class="p-4">
									<div className='d-flex justify-content-between'>
										<h5>{item.name}</h5>
										<a href={item.map} target='_blank'>View Map <i className='typcn typcn-export'></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				)
			}
		</div>
	</div>
	</div>
	
  )
}

export default CardLists