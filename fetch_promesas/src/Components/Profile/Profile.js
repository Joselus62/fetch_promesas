import React from 'react';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                user: {
                    name: '',
                    username: '',
                    email: '',
                    photo: '',
                },
        };
    }
    
    // Metodo invocado por el ciclo de vida del componente.
    componentDidMount() {
        /*this.setState({
        user: this.props.user,
        });*/
        // Que pasaria si el fetch no funciona? o tarda mucho?
        fetch('https://jsonplaceholder.typicode.com/users/2') // Utilizo GET Method
            .then(response => response.json())
            .then(json => {
                console.log(json)

                const { name } = json;
                console.log(name);
                this.setState({
                    user: {
                        name: json.name,
                        username: json.username,
                        email: json.email, 
                        photo: "https://picsum.photos/200/300" //this.props.user.photo // No uso photo del JSON
                    }
                })
            })
    }
    
    render() {
        return (
            <div className="profile">
                <div className="profile-header">
                <div className="profile-header-photo">
                    <img src={this.state.user.photo} alt="profile" />
                </div>
                <div className="profile-header-info">
                    <div className="profile-header-info-name">
                    {this.state.user.name}
                    </div>
                    <div className="profile-header-info-username">
                    @{this.state.user.username}
                    </div>
                </div>
                </div>
                <div className="profile-body">
                <div className="profile-body-info">
                    <div className="profile-body-info-email">
                    {this.state.user.email}
                    </div>
                </div>
                </div>
            </div>
        );
    }
}