import React, { useState } from 'react'
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';

const Model = ({id}) => {
	const navigate = useNavigate();
	const [value, setValue] = useState('');
	const changeHandler = () => {
		if(value === '123456'){
			$('body').removeClass('modal-open');
			$('.modal-backdrop').remove();
			navigate(`/district/${id}`);
		}else{
			NotificationManager.error("Incorrect Password")
		}
	}
	
  return (
	<div className="modal-dialog" role="document">
		<div className="modal-content">
			<div className="modal-body">
				<div className="form-group row p-3 mb-0 mt-0">
					<label className="col-form-label">Enter Password</label>
					<input type="password" placeholder='Password' className='form-control' onChange={(event) => setValue(event.target.value)}/>
					<button type="button" className="btn btn-sm mt-2 text-white" onClick={() => changeHandler()} style={{backgroundColor : '#8dbe3f'}}>Submit</button>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Model