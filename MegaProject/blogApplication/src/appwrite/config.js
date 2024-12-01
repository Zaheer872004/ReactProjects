import { parseAstAsync } from 'vite';
import conf from '../conf/conf.js'

import { Client, Account, ID, Databases, Storage, Query, Flag } from "appwrite";




export class Service {

  client = new Client();
  account;
  databases;
  storage; // bucket

  constructor() {

    this.client
      .setEndpoint(conf.appwrite_url)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);

    this.storage = new Storage(this.client);

  }

  createPost = async ({ title, slug, content, featuredImage, status, userId }) => {

    try {

      const post = await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,

        }

      )

      if (!post) {
        throw new Error('Failed to create post');
      }

      return post;


    } catch (error) {
      console.log(error);
      throw error;
    }

  }

  updatePost = async (slug, { title, content, featuredImage, status, userId }) => {

    try {

      postUpdate = await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId
        }
      )

      if(!postUpdate) {
        throw new Error('Failed to update post');
      }

      return postUpdate;

    } catch (error) {
      console.log(error)
      throw error;
    }


  }


  deletePost = async(slug) => {

    try {

      const postDelete = await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
      )

      if(!postDelete) {
        throw new Error('Failed to delete post');
      }

      return true;

    } catch (error) {
      console.log(error);
      return false;
    }
  }

  // getAllPosts = async (queries = [Query.equal('status', 'active'),]) => {

  getAllPosts = async () => {

    try {

      const allPost = await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        // queries
        [
          Query.equal('status', 'active'),
          Query.limit(25),
          Query.orderDesc('createdAt'),


        ]
      )

      if(!allPost) {
        throw new Error('Failed to get All posts');
      }

      return allPost;

    } catch (error) {
      console.log(error);
      throw error;
    }

  }


  getPostById = async (slug) => {

    try {

      const postById = await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
      )

      if(!postById) {
        throw new Error('Failed to get post');
      }

      return postById;

    } catch (error) {
      console.log(error)
      throw error;
      
    }


  }

  //////////
  // file upload services
  /////////

  // const promise = storage.createFile(
  //   '[BUCKET_ID]',
  //   ID.unique(),
  //   document.getElementById('uploader').files[0]
  // );

  uploadFile = async (file) => {

    try {

      const fileUpload = await this.storage.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      )

      if(!fileUpload) {
        throw new Error('Failed to upload file');
      }

      return fileUpload;


    } catch (error) {
      console.log(error)
      throw error;
      
    }

  }

  deleteFile = async (fileId) => {

    try {


      const fileDelete = await this.storage.deleteFile(
        conf.appwriteBucketId,
        fileId,
      )

      if(!fileDelete) {
        throw new Error('Failed to delete file');
      }

      return true;

    } catch (error) {
      console.log(error);
      return false;
      
    }


  }

}

export const service = new Service();