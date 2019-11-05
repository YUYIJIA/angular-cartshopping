import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  // @Output 装饰器和一个事件发射器（EventEmitter）实例定义一个名为 notify 的属性。这可以让商品提醒组件在 notify 属性发生变化时发出事件。
   @Input() product;
   @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}