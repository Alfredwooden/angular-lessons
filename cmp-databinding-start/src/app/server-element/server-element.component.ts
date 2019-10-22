import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() {
    console.log('constructor called!');

  }

  // Called after a bound input property changes
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  // Called once the component is initializiced
  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('Text content: ' + this.header.nativeElement.textContent);
  }

  // Called during every change detection run
  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  // Called after content (ng-content) has been projected into view
  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  // Called every time the projected content has been chacked
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  // Called after the components view (and child views) has been init
  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }

  // Called everytime the view (and child views) have been checked
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  // Called once the component is about to be destroyed
  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }
}
