import React from 'react';
import Header from '../../Components/Header/Header';
import { useNavigate } from 'react-router-dom';

const States = () => {

    const navigate = useNavigate()
    
    return (
        <>
            <Header />
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingTop: '80px'}}>
           
            <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', height: '20rem'}}>
                <div class="card" style={{width: '13rem', height: '14rem', borderRadius : '18px'}}>
                    <img src="/rajastan.png" class="card-img-top" alt="..." style={{width: '13rem', height: '7rem', borderRadius : '18px 18px 0px 0px'}}/>
                        <div class="card-body text-center">
                            <h3 class="card-title mb-2">Barabanki</h3>
                            <a href="#" class="btn btn-rounded btn-bluish-green">Map</a>
                        </div>
                </div>
                <div class="card" style={{width: '13rem', height: '14rem', borderRadius : '18px'}}>
                    <img src="/maharashtra.png" class="card-img-top" alt="..." style={{width: '13rem', height: '7rem', borderRadius : '18px 18px 0px 0px'}}/>
                        <div class="card-body text-center">
                            <h3 class="card-title mb-2">Barmer</h3>
                            <a href="#" class="btn btn-rounded btn-bluish-green">Map</a>
                        </div>
                </div>
                <div class="card" style={{width: '13rem', height: '14rem', borderRadius : '18px'}}>
                    <img src="/harayana.png" class="card-img-top" alt="..." style={{width: '13rem', height: '7rem', borderRadius : '18px 18px 0px 0px'}}/>
                        <div class="card-body text-center">
                            <h3 class="card-title mb-2">Beawar</h3>
                            <a onClick={() => {navigate(`/district/${1}`)}} class="btn btn-rounded btn-bluish-green">Map</a>
                        </div>
                </div>
                <div class="card" style={{width: '13rem', height: '14rem', borderRadius : '18px'}}>
                    <img src="/gujrat.png" class="card-img-top" alt="..." style={{width: '13rem', height: '7rem', borderRadius : '18px 18px 0px 0px'}}/>
                        <div class="card-body text-center">
                            <h3 class="card-title mb-2">Guntur</h3>
                            <a href="#" class="btn btn-rounded btn-bluish-green">Map</a>
                        </div>
                </div>
            </div>
           <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', height: '20rem'}}>
                <div class="card" style={{width: '13rem', height: '14rem', borderRadius : '18px'}}>
                    <img src="/maharashtra.png" class="card-img-top" alt="..." style={{width: '13rem', height: '7rem', borderRadius : '18px 18px 0px 0px'}}/>
                        <div class="card-body text-center">
                            <h3 class="card-title mb-2">Jaisalmer</h3>
                            <a href="#" class="btn btn-rounded btn-bluish-green">Map</a>
                        </div>
                </div>
                <div class="card" style={{width: '13rem', height: '14rem', borderRadius : '18px'}}>
                    <img src="/harayana.png" class="card-img-top" alt="..." style={{width: '13rem', height: '7rem', borderRadius : '18px 18px 0px 0px'}}/>
                        <div class="card-body text-center">
                            <h3 class="card-title mb-2">Jaitaran</h3>
                            <a onClick={() => {navigate(`/district/${2}`)}} class="btn btn-rounded btn-bluish-green">Map</a>
                        </div>
                </div>
                <div class="card" style={{width: '13rem', height: '14rem', borderRadius : '18px'}}>
                    <img src="/gujrat.png" class="card-img-top" alt="..." style={{width: '13rem', height: '7rem', borderRadius : '18px 18px 0px 0px'}}/>
                        <div class="card-body text-center">
                            <h3 class="card-title mb-2">Jodhpur</h3>
                            <a  onClick={() => {navigate(`/district/${3}`)}} class="btn btn-rounded btn-bluish-green">Map</a>
                        </div>
                </div>
                <div class="card" style={{width: '13rem', height: '14rem', borderRadius : '18px'}}>
                    <img src="/uttarpradesh.png" class="card-img-top" alt="..." style={{width: '13rem', height: '7rem', borderRadius : '18px 18px 0px 0px'}} />
                        <div class="card-body text-center">
                            <h3 class="card-title mb-2">Nagaur</h3>
                            <a href="#" class="btn btn-rounded btn-bluish-green">Map</a>
                        </div>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', height: '20rem'}}>
                <div class="card" style={{width: '13rem', height: '14rem', borderRadius : '18px'}}>
                    <img src="/uttarpradesh.png" class="card-img-top" alt="..." style={{width: '13rem', height: '7rem', borderRadius : '18px 18px 0px 0px'}} />
                        <div class="card-body text-center">
                            <h3 class="card-title mb-2">Nagpur</h3>
                            <a href="#" class="btn btn-rounded btn-bluish-green">Map</a>
                        </div>
                </div>
                <div class="card" style={{width: '13rem', height: '14rem', borderRadius : '18px'}}>
                    <img src="/gujrat.png" class="card-img-top" alt="..." style={{width: '13rem', height: '7rem', borderRadius : '18px 18px 0px 0px'}}/>
                        <div class="card-body text-center">
                            <h3 class="card-title mb-2">Indore</h3>
                            <a href="#" class="btn btn-rounded btn-bluish-green">Map</a>
                        </div>
                </div>
                <div class="card" style={{width: '13rem', height: '14rem', borderRadius : '18px'}}>
                    <img src="/maharashtra.png" class="card-img-top" alt="..." style={{width: '13rem', height: '7rem', borderRadius : '18px 18px 0px 0px'}}/>
                        <div class="card-body text-center">
                            <h3 class="card-title mb-2">Solapur</h3>
                            <a href="#" class="btn btn-rounded btn-bluish-green">Map</a>
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default States;
