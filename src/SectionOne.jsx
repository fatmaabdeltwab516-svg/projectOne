
export function SectionOne(){
    return(
        <section className="section1">
           <div className="card-content">
             <div className="d-flex flex-row gap-3 ps-3">
                <span className="span">1</span>
                <div className="d-flex flex-column">
                  <p className="text-1">STEP 1</p>
                <p className="text-2">YOUR INFO</p>
                </div>
              </div>
              <div className="d-flex flex-row gap-3 ps-3">
                <span>2</span>
                <div className="d-flex flex-column">
                   <p className="text-1">STEP 2</p>
                <p className="text-2">SELECT PLAN</p>
                </div>
               
              </div>
              <div className="d-flex flex-row gap-3 ps-3">
                <span>3</span>
                <div className="d-flex flex-column">
                    <p className="text-1">STEP 3</p>
                <p className="text-2">ADD-ONS</p>
                </div>
              </div>
              <div className="d-flex flex-row gap-3 ps-3">
                <span>4</span>
                 <div className="d-flex flex-column">
                    <p className="text-1">STEP 4</p>
                <p className="text-2">SUMMARY</p>
                 </div>
              
            </div>
            <img src="/Group-12.svg" alt="" />
           </div>
        </section>
    )
}