

export default class RickService {

  _apiBase = 'https://rickandmortyapi.com/api';

  async getResource(url) {

     const resolve = await fetch(`${this._apiBase}${url}`) ;

     if(!resolve.ok) {
       throw new Error(`Could not fetch ${url} ` +
        `, reciver ${resolve.status}`);
     }

     return await resolve.json();
    }

                                                                   //Character
    
   async getAllCharacter () {
      
      const resolve =  await this.getResource(`/character/?page=19`);
      return resolve.results;
    }

    getSingleCharacter (id) {
      return this.getResource(`/character/${id}`);
      
    }
                                                                      //Location
 async   getAllLocations () {
      const resolve = await  this.getResource(`/location/`);
      return resolve.results
    }

    getSingleLocation (id) {
    return  this.getResource(`/location/${id}/`);
      
    }
                                                                  //Epidode
 async   getAllEpisodes () {
      const resolve = await this.getResource(`/episode/`);
      return resolve.results
    }

    getSingleEpisodes (id) {
    return   this.getResource(`/episode/${id}/`);
    }

    _trasformCharacter = (character) => {
      return {
      id: character.id,
      name : character.name,
      status : character.status,
      species : character.species,
      image : character.image,
      gender : character.gender,
      
     }
    }



  }
