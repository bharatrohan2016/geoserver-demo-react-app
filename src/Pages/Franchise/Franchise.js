import React, { useState } from 'react'
import Header from '../../Components/Header/Header';
import styles from './Franchise.module.css';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';

const Franchise = () => {
	const navigate = useNavigate();
	const [value, setValue] = useState('');
	const franchiseList = [
		"Triveni Enterprises",
		"Franchise Name-2",
		"Franchise Name-3",
		"Franchise Name-4",
		"Franchise Name-5",
		"Franchise Name-6"
	];
	const colors = ['#efc639', '#d18a49', '#8dbe3f', '#e8ba3a', '#578019', '#8a812c'];

	const changeHandler = () => {
		if(value === '123456'){
			// $('.modal').modal('hide');
			$('body').removeClass('modal-open');
			$('.modal-backdrop').remove();
			navigate('/district/4');
		}
	}
  return (
	<>
		<Header/>
		<div class="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-body">
					<div className="form-group row p-3 mb-0 mt-0">
						<label className="col-form-label">Enter Password</label>
						<input type="password" placeholder='Password' className='form-control' onChange={(event) => setValue(event.target.value)}/>
						<button type="button" class="btn btn-sm btn-primary mt-2" onClick={() => changeHandler()}>Submit</button>
					</div>
					
				</div>
			</div>
		</div>
		</div>
		
		

		<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', paddingTop : '85px', backgroundColor : 'white'}}>
			<div className="col-lg-12 grid-margin stretch-card">
				<div className='card'>
					<div className={styles.heading}>
					<h3 class="font-weight-bold mb-2">Master Dashboard</h3>
					<p class="font-italic text-muted mb-4">Transforming Agriculture with Technology and Heart.</p>
					</div>
					<div className='row mx-1'>
						{
							franchiseList.map((item, index) => 
								<div class="col-md-4 grid-margin stretch-card" key={index}>
									<div class="card" style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
										<div class="card-body text-center">
											<h5 class="card-title font-weight-bold">{item}</h5>
											<button className='btn btn-sm btn-secondary' id={index} data-toggle="modal" data-target="#exampleModal"
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