



import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModelConfig } from '@antv/g6/lib/types';
import { group } from '@angular/animations';
import { DEFAULT_TWOTONE_COLOR, NzMessageService } from 'ng-zorro-antd';
import G6 from '../.././assets/js/g6.min.js';

@Component({
  selector: 'app-vg6-demo',
  templateUrl: './vg6-demo.component.html',
  styleUrls: ['./vg6-demo.component.styl']
})
export class Vg6DemoComponent implements OnInit {
  graph: any;
  count = 3;
  count1 = 0;
  count2 = 0;
  pCount = 1;
  data: any;
  type: any;

  addedNodeCount: 5;
  addCount: any;
  contextMenu: any;
  constructor() {}
  ngOnInit(): void {
    this.chartdata();
  }



  // 点击扩大视口 缩小视口；
onClickFunc(type) {
    if (type === 1) {
      this.pCount -= 0.05;
      this.graph.zoomTo(this.pCount, { x: 785, y: 500 });
    } else {
      this.pCount += 0.05;
      this.graph.zoomTo(this.pCount, { x: 785, y: 500 });
    }
  }

// 添加节点
  addNode(postionX, postionY, type) {
    if (type === 0) {
      const obj = {
        id: 'module' + this.count,
        label: '模块' + this.count,
        x: postionX, // Number，可选，节点位置的 x 值
        y: postionY, // Number，可选，节点位置的 y 值
        description: `请输入模块${this.count}的描述`,
      };
      this.count += 1;
      this.graph.addItem('node', obj);
    } else if (type === 2) {
      const obj = {
        id: 'node' + this.count1,
        label: '终点',
        type: 'circle',
        size: 80,
        style: {
        stroke: '#69c0ff',
          fill: '#ffffff',
        },
        x: postionX, // Number，可选，节点位置的 x 值
        y: postionY, // Number，可选，节点位置的 y 值
        anchorPoints: [[0, 0.5]],
        linkPoints: {
          left: true,
        }
      };
      this.count1 += 1;
      this.graph.addItem('node', obj);
    } else if (type === 1) {
      const obj = {
        id: 'end' + this.count2,
        label: '起点',
        type: 'circle',
        size: 80,
        style: {
          stroke: '#69c0ff',
          fill: '#ffffff',
        },
        x: postionX, // Number，可选，节点位置的 x 值
        y: postionY, // Number，可选，节点位置的 y 值
        anchorPoints: [[1, 0.5]],
        linkPoints: {
          right: true,
        }
      };
      this.count2 += 1;
      this.graph.addItem('node', obj);
    }
  }

  clickNode(type) {
    this.type = type;
    if (!this.addCount) {
      this.addCount = 1;
    }
  }

  chartdata() {
     this.data = {
      nodes: [
        {
          id: 'rect',
          label: '起点',
          type: 'circle',
          x: 5,
          y: 150,
          size: 85,
          anchorPoints: [   // 可连接选择的连接点
            [1, 0.5]
          ],
          linkPoints: {
            top: false,
            right: true,
            bottom: false,
            left: false,
            // the size of the linkpoints' circle
            size: 10,
            lineWidth: 1,
            fill: '#72CC4A',
            stroke: '#72CC4A',
          },
        },
        {
          id: 'rect1',
          label: '模块1',
          description: '请输入模块1的描述',
          x: 230,
          y: 150,
          anchorPoints: [   // 可连接选择的连接点
            [0, 0.5],
            [1, 0.5]
          ],
        },
        {
          id: 'rect2',
          label: '模块2',
          description: '请输入模块2的描述',
          x: 550,
          y: 150,
          anchorPoints: [   // 可连接选择的连接点
            [0, 0.5],
            [1, 0.5]
          ],
        },
        {
          id: 'rect3',
          label: '终点',
          type: 'circle',
          x: 750,
          y: 150,
          size: 85,
          anchorPoints: [   // 可连接选择的连接点
            [0, 0.5],
          ],
          linkPoints: {
            top: false,
            right: false,
            bottom: false,
            left: true,
            // the size of the linkpoints' circle
            size: 10,
            lineWidth: 1,
            fill: '#72CC4A',
            stroke: '#72CC4A',
          },
        }
      ],
      edges: [
        {
          id: 'edge',
          source: 'rect',
          target: 'rect1',
          sourceAnchor: 0, // 该边连入source点的第0个anchorPoint
          targetAnchor: 0, // 该边连入target点的第0个anchorPoint
          // type: 'polyline',

        }, {
          id: 'edge1',
          source: 'rect1',
          target: 'rect2',
          sourceAnchor: 1, // 该边连入source点的第0个anchorPoint
          targetAnchor: 0, // 该边连入target点的第0个anchorPoint
          // type: 'polyline',
        }, {
          id: 'edge2',
          source: 'rect2',
          target: 'rect3',
          sourceAnchor: 1, // 该边连入source点的第0个anchorPoint
          targetAnchor: 0, // 该边连入target点的第0个anchorPoint
          // type: 'polyline',
        }
      ]
    };

    // 自定义拖拽添加边；
     G6.registerBehavior('click-add-edge', {
      getEvents() {
        return {
          'node:click': 'onClick',
          mousemove: 'onMousemove',
          'edge:click': 'onEdgeClick' // 点击空白处，取消边
        };
      },
      onClick(ev) {
        const node = ev.item;
        const graph = this.graph;
        const point = {
          x: ev.x,
          y: ev.y
        };
        const model = node.getModel();
        if (this.addingEdge && this.edge) {
          graph.updateItem(this.edge, {
            target: model.id
          });
          // graph.setItemState(this.edge, 'selected', true);
          this.edge = null;
          this.addingEdge = false;
        } else {
          this.edge = graph.addItem('edge', {
            source: model.id,
            target: point,
            sourceAnchor: 1,
            targetAnchor: 0,
          });
          this.addingEdge = true;
        }
      },
      onMousemove(ev) {
        const point = {
          x: ev.x,
          y: ev.y
        };
        if (this.addingEdge && this.edge) {
          this.graph.updateItem(this.edge, {
            target: point
          });
        }
      },
      onEdgeClick(ev) {
        const currentEdge = ev.item;
        // 拖拽过程中，点击会点击到新增的边上
        if (this.addingEdge && this.edge === currentEdge) {
          this.graph.removeItem(this.edge);
          this.edge = null;
          this.addingEdge = false;
        }
      }
    });
    // tslint:disable-next-line:member-ordering
     const width = document.getElementById('panel-pragh').scrollWidth;
     const height = document.getElementById('panel-pragh').scrollHeight || 800;
     this.graph = new G6.Graph({
      container: 'panel-pragh',
      width,
      height,
      // translate the graph to align the canvas's center, support by v3.5.1
      fitCenter: true,
      defaultNode: {
    type: 'modelRect',
    size: [220, 80],
    style: {
      radius: 5,
      stroke: '#69c0ff',
      fill: '#ffffff',
      lineWidth: 1,
      fillOpacity: 1,
    },
    // label configurations
    labelCfg: {
      style: {
        fill: '#595959',
        fontSize: 14,
      },
      offset: 30,
    },
    // left rect
    preRect: {
      show: true,
      width: 4,
      fill: '#40a9ff',
      radius: 2,
    },
    // configurations for the four linkpoints
    linkPoints: {
      top: false,
      right: true,
      bottom: false,
      left: true,
      // the size of the linkpoints' circle
      size: 10,
      lineWidth: 1,
      fill: '#72CC4A',
      stroke: '#72CC4A',
    },
    // configurations for the icon
    logoIcon: {
      // whether to show the icon
      show: true,
      x: 0,
      y: 0,
      // the image url for the icon, string type
      img:
        'https://gw.alipayobjects.com/zos/basement_prod/4f81893c-1806-4de4-aff3-9a6b266bc8a2.svg',
      width: 16,
      height: 16,
      // adjust the offset along x-axis for the icon
      offset: 0,
    },
    // configurations for state icon
    stateIcon: {
      // whether to show the icon
      show: true,
      x: 0,
      y: 0,
      // the image url for the icon, string type
      img:
        'https://gw.alipayobjects.com/zos/basement_prod/300a2523-67e0-4cbf-9d4a-67c077b40395.svg',
      width: 16,
      height: 16,
      // adjust hte offset along x-axis for the icon
      offset: -5,
    },
      },
      defaultEdge: {
        type: 'polyline',
    style: {
      lineWidth: 2,
      stroke: 'green',
      endArrow: true,
      lineAppendWidth: 10,
    }
      },
      modes: {
      default: [  'drag-node', 'click-add-edge'],
      // addNode: ['click-add-node', 'click-select'],
      // addEdge: ['click-add-edge', 'click-select']
      },
      nodeStateStyles: {
    hover: {
      lineWidth: 2,
      stroke: '#1890ff',
      fill: '#e6f7ff',
    },
      },

    });



     this.graph.read(this.data);
     this.graph.render();
     // 动态改变样式；
     this.graph.on('node:mouseenter', (evt) => {
      const { item } = evt;
      this.graph.setItemState(item, 'hover', true);
    });
     this.graph.on('node:mouseleave', (evt) => {
      const { item } = evt;
      this.graph.setItemState(item, 'hover', false);
    });
     this.graph.on('aftercreateedge', (ev) => {
      this.data = this.graph.save();
    });
    // 拖拽左边节点到右边  画布；
     this.graph.on('canvas:mouseup', (ev) => {
      if (this.addCount) {
        const point = {x: ev.x, y: ev.y };
        this.addNode(point.x, point.y, this.type);
        this.data = this.graph.save();
        this.addCount = 0;
      }
    });
     this.graph.on('canvas:drop', (ev) => {
      if (this.addCount) {
        const point = {x: ev.x, y: ev.y };
        this.addNode(point.x, point.y, this.type);
        this.data = this.graph.save();
        this.addCount = 0;
      }
    });

   // 右击鼠标 添加一个dom元素，绑定事件移除节点，removeItem('node',obj)
     this.graph.on('node:mousedown', (ev) => {

    });
}


}
