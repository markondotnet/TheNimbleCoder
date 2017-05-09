import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var jQuery: any;

@Component({
  selector: 'landing',
  templateUrl: 'landing.component.html',
  styleUrls: [ './landing.component.scss' ]
})
export class LandingComponent {
  constructor( private route: ActivatedRoute ) {

  }

  onAnchorClick ( ) {
    this.route.fragment.subscribe( f => {
      let element: any = document.querySelector( '#' + f );
      if ( element ) {
        element.scrollIntoView(element);
      }
    });
  }

  ngAfterViewInit() {
    jQuery('.back-to-top').on('click', function() {
      jQuery('html, body').animate({ scrollTop: 0 }, 'fast');
      return false;
    });
  }
}
