import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../Components/Header/Header';

const District = () => {
  const {id} = useParams();

  return (
    <>
      <Header/>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', paddingTop : '80px'}}>
        
            
              {id == 1 && <>
                <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', height : '20rem'}}>
              <div class="card" style={{width: '12rem', height: '14rem', borderRadius : '18px'}}>
                    <img src="/rajastan.png" class="card-img-top" alt="..." style={{width: '12rem', height: '7rem', borderRadius : '18px 18px 0px 0px'}}/>
                        <div class="card-body text-center text-center">
                            <h5 class="card-title mb-2">Badnor</h5>
                            <a href="#" class="btn btn-rounded btn-bluish-green">Map</a>
                        </div>
                </div>
                <div class="card" style={{width: '12rem', height: '14rem', borderRadius : '18px'}}>
                    <img src="/maharashtra.png" class="card-img-top" alt="..." style={{width: '12rem', height: '7rem', borderRadius : '18px 18px 0px 0px'}}/>
                        <div class="card-body text-center">
                            <h5 class="card-title mb-2">Beawar</h5>
                            <a href="#" class="btn btn-rounded btn-bluish-green">Map</a>
                        </div>
                </div>
                <div class="card" style={{width: '12rem', height: '14rem', borderRadius : '18px'}}>
                    <img src="/harayana.png" class="card-img-top" alt="..." style={{width: '12rem', height: '7rem', borderRadius : '18px 18px 0px 0px'}}/>
                        <div class="card-body text-center">
                            <h5 class="card-title mb-2">Bijayanagar</h5>
                            <a href="#" class="btn btn-rounded btn-bluish-green">Map</a>
                        </div>
                </div>
                </div>
                </>}
                
                {id == 2 && <>
                  <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', height : '20rem'}}>
                  <div class="card" style={{width: '12rem', height: '14rem', borderRadius : '18px'}}>
                    <img src="/gujrat.png" class="card-img-top" alt="..." style={{width: '12rem', height: '7rem', borderRadius : '18px 18px 0px 0px'}}/>
                        <div class="card-body text-center">
                            <h5 class="card-title mb-2">Jaitaran</h5>
                            <a href="#" class="btn btn-rounded btn-bluish-green">Map</a>
                        </div>
                  </div>
                  <div class="card" style={{width: '12rem', height: '14rem', borderRadius : '18px'}}>
                      <img src="/maharashtra.png" class="card-img-top" alt="..." style={{width: '12rem', height: '7rem', borderRadius : '18px 18px 0px 0px'}}/>
                          <div class="card-body text-center">
                              <h5 class="card-title mb-2">Raipur</h5>
                              <a href="#" class="btn btn-rounded btn-bluish-green">Map</a>
                          </div>
                  </div>
                  </div>
                </>
                }
            {id == 3 && <>
                  <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', height: '20rem'}}>
                  <div class="card" style={{width: '12rem', height: '14rem', borderRadius : '18px'}}>
                      <img src="/harayana.png" class="card-img-top" alt="..." style={{width: '12rem', height: '7rem', borderRadius : '18px 18px 0px 0px'}}/>
                          <div class="card-body text-center">
                              <h5 class="card-title mb-2">Bhopalgarh</h5>
                              <a href="#" class="btn btn-rounded btn-bluish-green">Map</a>
                          </div>
                  </div>
                  <div class="card" style={{width: '12rem', height: '14rem', borderRadius : '18px'}}>
                      <img src="/gujrat.png" class="card-img-top" alt="..." style={{width: '12rem', height: '7rem', borderRadius : '18px 18px 0px 0px'}}/>
                          <div class="card-body text-center">
                              <h5 class="card-title mb-2">Bilara</h5>
                              <a href="#" class="btn btn-rounded btn-bluish-green">Map</a>
                          </div>
                  </div>
                  <div class="card" style={{width: '12rem', height: '14rem', borderRadius : '18px'}}>
                      <img src="/uttarpradesh.png" class="card-img-top" alt="..." style={{width: '12rem', height: '7rem', borderRadius : '18px 18px 0px 0px'}} />
                          <div class="card-body text-center">
                              <h5 class="card-title mb-2">Luni</h5>
                              <a href="#" class="btn btn-rounded btn-bluish-green">Map</a>
                          </div>
                  </div>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', height: '20rem'}}>
                  <div class="card" style={{width: '12rem', height: '14rem', borderRadius : '18px'}}>
                      <img src="/uttarpradesh.png" class="card-img-top" alt="..." style={{width: '12rem', height: '7rem', borderRadius : '18px 18px 0px 0px'}} />
                          <div class="card-body text-center">
                              <h5 class="card-title mb-2">Mandor</h5>
                              <a href="#" class="btn btn-rounded btn-bluish-green">Map</a>
                          </div>
                  </div>
                  <div class="card" style={{width: '12rem', height: '14rem', borderRadius : '18px'}}>
                      <img src="/uttarpradesh.png" class="card-img-top" alt="..." style={{width: '12rem', height: '7rem', borderRadius : '18px 18px 0px 0px'}} />
                          <div class="card-body text-center">
                              <h5 class="card-title mb-2">Osiyan</h5>
                              <a href="#" class="btn btn-rounded btn-bluish-green">Map</a>
                          </div>
                  </div>
                  <div class="card" style={{width: '12rem', height: '14rem', borderRadius : '18px'}}>
                      <img src="/uttarpradesh.png" class="card-img-top" alt="..." style={{width: '12rem', height: '7rem', borderRadius : '18px 18px 0px 0px'}} />
                          <div class="card-body text-center">
                              <h5 class="card-title mb-2">Shergarh</h5>
                              <a href="#" class="btn btn-rounded btn-bluish-green">Map</a>
                          </div>
                  </div>
                </div>
           </>}
        </div>
    </>
  )
}

export default District