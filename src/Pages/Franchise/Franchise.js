import React, { useState } from 'react'
import Header from '../../Components/Header/Header';
import styles from './Franchise.module.css';
import { useNavigate } from 'react-router-dom';

import { FranchiseList } from '../../Utils/commonFunctions';
import Model from '../../Components/Model/Model';

const Franchise = () => {

	const [id, setId] = useState(0);
	// const colors = ['#efc639', '#d18a49', '#8dbe3f', '#e8ba3a', '#578019', '#8a812c'];

  	return (
	<>
		<Header/>
		<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<Model id={id}/>
		</div>
		<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', paddingTop : '85px', backgroundColor : 'white'}}>
			<div className="col-lg-12 grid-margin stretch-card">
				<div className='card' style={{boxShadow : "0 0 10px #041a16"}}>
					<div className={styles.heading}>
						<h3 class="font-weight-bold mb-2">Master Dashboard</h3>
						<p class="font-italic text-muted mb-4">Transforming Agriculture with Technology and Heart.</p>
					</div>
					<div className='row mx-1'>
						{
							FranchiseList.map((item, index) => 
								<div class="col-md-4 grid-margin stretch-card" key={index}>
									<div class="card" style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
										<div class="card-body text-center">
											<h3 class="card-title font-weight-bold">{item.name}</h3>
											<button className='btn btn-sm text-white' data-toggle="modal" data-target="#exampleModal" onClick={() => setId(item.id)} 
											style={{backgroundColor : '#578019'}}
											>Navigate <i className='typcn typcn-export'></i> </button>
										</div>
									</div>
								</div>
							)
						}
					</div>
				</div>
            </div>
		</div>
	</>
  )
}

export default Franchise