import React, { Component } from "react";

class AddProject extends Component {
  
    constructor(){
        super()

        this.state = {
            projectName : "",
            projectIdentifier : "",
            description: "",
            start_date : "",
            end_date : ""
        };

        this.onSubmit = this.onSubmit.bind(this);
    }


    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        const newProject ={
            projectName : this.state.projectName,
            projectIdentifier : this.state.projectIdentifier,
            description: this.state.description,
            start_date : this.state.start_date,
            end_date : this.state.end_date
        };
        console.log(newProject)
    }


    render() {
    return (
        <div>
        {

        }
        

        <div className="project hero fullscreen" >
        <div className="container">
            <div className="row p-0 level fill-height">
                <div className="col-md-8 m-auto">
                        <div className="space xlarge"></div>
                            <div className="padded">
                            <h1 className="display-4 text-center u-font-alt tc">CREATE PROJECT</h1>
                        </div>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                    
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg " name="ProjectName" placeholder="Project Name" value={this.state.projectName} onChange={this.onChange.bind(this)}/>
                        </div><br></br>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Unique Project ID" name ='projectIdentifier' value={this.state.projectIdentifier} onChange={this.onChange.bind(this)}
                                 />
                        </div><br/>
                       
                        <div className="form-group">
                            <textarea className="form-control form-control-lg" placeholder="Project Description" name = 'description' value={this.state.description} onChange={this.onChange.bind(this)}></textarea>
                        </div><br/>
                        <h6>Start Date</h6>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-lg" name="start_date" value={this.state.start_date} onChange={this.onChange.bind(this)}/>
                        </div><br/>
                        <h6>Estimated End Date</h6>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-lg" name="end_date" value={this.state.end_date} onChange={this.onChange.bind(this)}/>
                        </div><br/>
 
                        <input type="submit" className="btn btn-primary btn-block mt-4  " />
                    </form>
                </div>
            </div>
        </div>
    </div>
        

      </div>
    );
  }
}

export default AddProject;