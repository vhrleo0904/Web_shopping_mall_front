import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

@inject('stores')
@observer
class User extends Component {
	state = {
		account: "",
		password: "",
		username: "",
		home_number: "",
		phone_number: "",
		zip_code: "",
		address: "",
		email: "",
		goToLogin: false,
		goToProfile: false
	};
	
	render() {
		if(!this.state.goToLogin) {
			return (
				<div>
					<div>회원가입</div>
					<div>희망아이디 : <input value={this.state.account} onChange={this.updateAccount}/></div>
					<div>희망패스워드 : <input type="password" value={this.state.password} onChange={this.updatePassword}/></div>
					<div>패스워드확인 : <input type="password"/></div>
					<div>성명 : <input value={this.state.username} onChange={this.updateUsername}/></div>
					<div>전화번호 : <input value={this.state.home_number} onChange={this.updateHome_number}/></div>
					<div>핸드폰 : <input value={this.state.phone_number} onChange={this.updatePhone_number}/></div>
					<div>우편번호 : <input value={this.state.zip_code} onChange={this.updateZip_code}/></div>
					<div>주소 : <input value={this.state.address} onChange={this.updateAddress}/></div>
					<div>이메일 주소 : <input value={this.state.email} onChange={this.updateEmail}/></div>
					<div>회원약관 : <textarea value="동의하십니까?" readOnly={true}></textarea></div>
					<div><input type="radio" name="agree" value="동의"/>동의 <input type="radio" name="agree" value="비동의"/>비동의</div>
					<div><button onClick={this.SignUp}>회원가입</button></div>
				</div>
			);
		}
		else if(this.state.goToProfile) {
			return(
				<div>
					<div>아이디 : {this.state.account}</div>
					<div>이름 : {this.state.username}</div>
				</div>
			)
		}
		else {
			return(
				<div>
					<div>아이디 : <input value={this.state.account} onChange={this.updateAccount}/></div>
					<div>패스워드 : <input type="password" value={this.state.password} onChange={this.updatePassword}/></div>
					<div><button onClick={this.Login}>로그인</button></div>
				</div>
			);
		}
		
	}
	
	updateAccount = (event) => {
		this.setState( {
			...this.state,
			account: event.target.value
		})
	}
	
	updatePassword = (event) => {
		this.setState( {
			...this.state,
			password: event.target.value
		})
	}
	
	updateUsername = (event) => {
		this.setState( {
			...this.state,
			username: event.target.value
		})
	}
	
	updateHome_number = (event) => {
		this.setState( {
			...this.state,
			home_number: event.target.value
		})
	}
	
	updatePhone_number = (event) => {
		this.setState( {
			...this.state,
			phone_number: event.target.value
		})
	}
	
	updateZip_code = (event) => {
		this.setState( {
			...this.state,
			zip_code: event.target.value
		})
	}
	
	updateAddress = (event) => {
		this.setState( {
			...this.state,
			address: event.target.value
		})
	}
	
	updateEmail = (event) => {
		this.setState( {
			...this.state,
			email: event.target.value
		})
	}
	
	SignUp = async () => {
		if(await this.props.stores.profileStore.addUser(this.state)) {
			await this.setState({
				...this.state,
				goToLogin: true,
				account: "",
				password: ""
			});
			alert("회원가입 성공");
		} else {
			await this.setState({
				...this.state,
				password: ""
			});
			alert("회원가입 실패");
		}
	}
	
	Login = async () => {
		if(await this.props.stores.profileStore.login(this.state) === true) {
			await this.setState({
				...this.state,
				goToProfile: true
			});
		}
		else {
			await this.setState({
				...this.state,
				password: ''
			});
			alert("로그인 실패");
		}
	}
}

export default User;