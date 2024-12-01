
import conf from '../conf/conf.js'

import { Client, Account, ID } from "appwrite";

export class AuthService {

  client;
  account;

  constructor() {
    
    this.client = new Client()
        .setEndpoint(conf.appwrite_url)
        .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);

  }


  createAccount = async ({email, password, name}) => {

    // const promise = account.create('[USER_ID]', 'email@example.com', '');
    try {

      const userAccount = await this.account.create(ID.unique(), email, password, name);

      if(userAccount) {
        // call the login method with the email and password
        this.login({email, password});

      }
      else{
        return userAccount;
      }

    } catch (error) {
      console.log(error);
      throw error;
    }


  }


  login =  async ({email, password}) => {

    try {

      const userLogin = await this.account.createEmailPasswordSession(email, password);

      if(!userLogin) {
      
        throw new Error('Login failed | Please Provide valid creadentials');

      }

      return userLogin;


    } catch (error) {
      console.log(error);
      throw error;
    }

  }

  getCurrentUser = async () => {

    try {

    //   const result = await account.getSession(
    //     '<SESSION_ID>' // sessionId
    //   );

    //  get all the  devices session of the usser

    const user = await this.account.get();

    if(!user) {

      throw new Error('User not found / exists');
    }

    return user;



      
    } catch (error) {
      console.log(error);
      throw error;
    }


  }

  logout = async () => {

    try {

      const userLogout = await this.account.deleteSession('current');

      if(!userLogout) {
        throw new Error('Logout failed | try again later');
      }

      return userLogout;



    } catch (error) {
      console.log(error);
      throw error;
    }

  }


}


export const authService = new AuthService();