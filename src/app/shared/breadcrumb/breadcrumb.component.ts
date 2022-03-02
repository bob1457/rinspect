import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';
import { IBreadCrumb } from './interface';
import { filter, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  // public breadcrumbs: IBreadCrumb[];
  public breadcrumbs: IBreadCrumb[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    // this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
  }

  ngOnInit(): void {

    // Set initial route
    let breadcrumb: IBreadCrumb = {
      label: 'Home',
      url: ''
    };

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      // set breadcrumbs
      let root: ActivatedRoute = this.activatedRoute.root;
      this.breadcrumbs = this.getBreadcrumbs(root);
      this.breadcrumbs = [breadcrumb, ...this.breadcrumbs];

    });
    // this.router.events.pipe(
    //   filter((event: Event) => event instanceof NavigationEnd),
    //   distinctUntilChanged(),
    // ).subscribe(() => {
    //   this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
    // });
  }

  private getBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadCrumb[] = []): IBreadCrumb[] {
    const ROUTE_DATA_BREADCRUMB = 'title';
    debugger
    // get the child routes
    let children: ActivatedRoute[] = route.children;
    console.log(route);
    console.log(route.children);

    // return if there are no more children
    if (children.length === 0) {
      return breadcrumbs;
    }

    // iterate over each children
    for (let child of children) {
      // verify primary route
      if (child.outlet !== PRIMARY_OUTLET || child.snapshot.url.length == 0) {
        continue;
      }

      // verify the custom data property "breadcrumb" is specified on the route
      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      // get the route's URL segment
      let routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');

      // append route URL to URL
      url += `/${routeURL}`;

      // add breadcrumb
      let breadcrumb: IBreadCrumb = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
        url: url
      };
      breadcrumbs.push(breadcrumb);

      // recursive
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
    return breadcrumbs;
  }

}
