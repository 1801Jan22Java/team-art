import { Component, OnInit } from '@angular/core';
import { Config, ConfigService } from '../../service/config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  error: any;
  headers: string[];
  config: Config;
  constructor(private configService: ConfigService) { }


  showConfig() {
    this.configService.getConfig()
      .subscribe(
        data => this.config = { ...data }, // success path
        error => this.error = error // error path
      );
  }

  showConfigResponse() {
    this.configService.getConfigResponse()
      // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);

        // access the body directly, which is typed as `Config`.
        this.config = { ... resp.body };
      });
  }

  ngOnInit() {
  }
}
