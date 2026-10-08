export function SectionTwo(){
    return(
        <section className="section2">
            <div className="content">
                <div className="text-top">
                    <h1>Personal info</h1>
                    <p>Please provide your name, email address, and phone number.</p>
                </div>
                <div className="d-flex flex-column">
                    <label htmlFor="#name">Name</label>
                    <input type="text" placeholder="e.g. Stephen King" />
                </div>
                <div className="d-flex flex-column">
                    <label htmlFor="#email">Email Address</label>
                    <input type="email" placeholder="e.g. stephenking@lorem.com" />
                </div>
                <div className="d-flex flex-column">
                    <label htmlFor="#phone">Phone Number</label>
                    <input type="phone" placeholder="e.g. +1 234 567 890" />
                </div>
                <button>Next Step</button>
            </div>
        </section>
    )
}