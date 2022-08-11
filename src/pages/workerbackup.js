{this.state.details.map((detail, id) => (
    <div key={id}>
        <div className="card shadow-lg">
            <div className={"bg-" + 
                          " card-header"}>worker {id + 1}  </div>
            <div className="card-body">
                <blockquote className={"text-" + 
                                   " blockquote mb-0"}>
                    <h1> {detail.detail} </h1>
                    <footer className="blockquote-footer">
                        {" "}
                        <cite title="Source Title">{detail.name} {detail.phone_no} {detail.salary} {detail.age} {detail.occupation} </cite>
                        <Photocontainer photo ={this.state.photo}>{detail.photo}</Photocontainer>
                    </footer>
                </blockquote>
            </div>
        </div>
        <span className="border border-primary "></span>
    </div>
))}