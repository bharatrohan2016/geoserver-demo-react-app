import React from 'react'

const CardLists = ({data}) => {
  return (
	<div className="col-lg-12 grid-margin stretch-card">
		<div className='card'>
		
		<div className='mt-4' style={{padding : '20px'}}>
			<div class="three">
				<h1>Districts Covered</h1>
			</div>
		</div>

		<div className='row mx-1 mb-5'>
			{
				data.map((item, index) => 
					<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 grid-margin stretch-card" key={index}>
						<div class="card shadow-lg" style={{borderRadius : '30px'}}>
							<div class="card-body p-0"><img src={item.image} alt="" class="w-100 card-img-top"/>
								<div class="p-4">
									<div className='d-flex justify-content-between'>
										<h4>{item.name}</h4>
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