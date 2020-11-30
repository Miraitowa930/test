
import { Component, OnInit } from '@angular/core';
import { NzFormatEmitEvent } from 'ng-zorro-antd';

@Component({
  selector: 'app-tree-templement',
  templateUrl: './tree-templement.component.html',
  styleUrls: ['./tree-templement.component.styl']
})
export class TreeTemplementComponent implements OnInit {

 nodes = [
    {
      title: 'ESP-H',
      key: '100',
      expanded: true,
      children: [
        {
          title: '报表管理',
          key: '1001',
          expanded: true,
          children: [
            { title: 'leaf', key: '10010', isLeaf: true },
            { title: 'leaf', key: '10011', isLeaf: true },
            { title: 'leaf', key: '10012', isLeaf: true }
          ]
        },
        {
          title: '态势感知',
          key: '1002',
          children: [{ title: 'leaf', key: '10020', isLeaf: true }]
        },
        {
          title: '日志管理',
          key: '1003',
          children: [
            { title: 'leaf', key: '10030', isLeaf: true },
            { title: 'leaf', key: '10031', isLeaf: true }
          ]
        },
        {
          title: '威胁分析',
          key: '1004',
          children: [
            { title: 'leaf', key: '10030', isLeaf: true },
            { title: 'leaf', key: '10031', isLeaf: true }
          ]
        },
        {
          title: '运维响应',
          key: '1005',
          children: [
            { title: 'leaf', key: '10030', isLeaf: true },
            { title: 'leaf', key: '10031', isLeaf: true }
          ]
        },
        {
          title: '威胁情报',
          key: '1006',
          children: [
            { title: 'leaf', key: '10030', isLeaf: true },
            { title: 'leaf', key: '10031', isLeaf: true }
          ]
        },
        {
          title: '脆弱性管理',
          key: '1007',
          children: [
            { title: 'leaf', key: '10030', isLeaf: true },
            { title: 'leaf', key: '10031', isLeaf: true }
          ]
        },
        {
          title: '态势监控',
          key: '1008',
          children: [
            { title: 'leaf', key: '10030', isLeaf: true },
            { title: 'leaf', key: '10031', isLeaf: true }
          ]
        },
        {
          title: '系统监控',
          key: '1009',
          children: [
            { title: 'leaf', key: '10030', isLeaf: true },
            { title: 'leaf', key: '10031', isLeaf: true }
          ]
        }
      ]
    }
  ];

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}

