import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
  public server = 'http://localhost:56530/';
  public apiUrl = 'visitplanner';
  public apikey = '5527ba3a-9a1f-4f36-b321-ed8ea6ec7968';
  public serverWithApiUrl = this.server + this.apiUrl;

  
}

export class AwsConfiguration {


}

export class GoogleConfiguration {

  
}
