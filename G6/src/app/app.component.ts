import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line: import-spacing
import  G6  from  '@antv/g6';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-G6';
  initdata: any;
  graph: any;

  constructor(){}
  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.chartData();
  }
  // tslint:disable-next-line: typedef
  chartData(){
     this.initdata = {
      // 点集
      // nodes 数组中包含节点对象。每个节点对象中唯一的、必要的 id 以标识不同的节点，x、 y 指定该节点的位置；
      nodes: [
        {
          id: 'node1',
          x: 100,
          y: 200,
          type: 'circle',
          size: 50,
          // anchorPoints: [ 0 , 0], // 指定边连如节点的连接点的位置
          labelCfg: {   // 标签配置属性 文本配置项
              positions: 'center',
              autoRotate: true,     // 边上的标签文本根据边的方向旋转
              offset: [ 2, 2, 2, 2], // 文本的偏移
              style: {         // 标签样式
                fontSize: 12
              },
          },
          // style: {   // 其它属性
          //   fill: '#000',   // 样式属性，元素的填充色
          //   stroke: '#888' ,  // 样式属性，元素的描边色
          //   lineWidth: 12, // 描边宽度
          //   shadowColor: '#000', // 阴影颜色
          //   shadowBlur: 11, // 阴影范围
          //   shadowOffsetX: 2, // 阴影x方向的偏移量
          //   // shadowOffsetY：5,
          // },
        },
        {
          id: 'node2',
          x: 300,
          y: 200,
        },
        {
          id: 'node3',
          x: 400,
          y: 200,
        }
      ],
      // 边集
      edges: [
        // 表示一条从 node1 节点连接到 node2 节点的边
        {
          source: 'node1',
          target: 'node2',
          label: '我是连线'
        },
        {
          source: 'node2',
          target: 'node3',
          label: '我是连线'
        },
      ],
    };
    // 3.创建关系图
     this.graph = new G6.Graph({
      container: 'demo',
      width: 800,
      height: 800,
      fitView: true, // 设置是否将图适配到画布中
      fitViewPadding: [20 , 40, 50, 20], // 画布上四周的留白宽度
      defaultNode: {
        shape: 'diamond',
        style: {                // 默认状态样式
          fill: 'pink'
        }
      },
      // 配置动态效果
      nodeStateStyles: {
        hover: {                // hover 状态为 true 时的样式
          fill: '#d3adf7'
        },
        running: {              // running 状态为 true 时的样式
          stroke: 'steelblue'
        }
      },


      //  图布局
      // 1.取消自动适配画布  即fitView：true
      //   layout: {                // Object，可选，布局的方法及其配置项，默认为 random 布局。
      //   type: 'force',         // 指定为力导向布局
      //   preventOverlap: true,  // 防止节点重叠
      //   // nodeSize: 30        // 节点大小，用于算法中防止节点重叠时的碰撞检测。由于已经在上一节的元素配置中设置了每个节点的 size 属性，则不需要在此设置 nodeSize。
      //   linkDistance: 100   // 指定边距离为100,为了解决力导向布局节点拥挤，
      // // 图布局会在调用graph.render()时执行计算
      // }
 

      // 内置交互行为 Behavior
      modes: {
        default: [
          {
            type: 'drag-canvas', // 拖拽画布
            direction: 'x',       // 允许拖拽方向 默认‘both’
        }, {
          type: 'zoom-canvans',   // 缩放画布
          // sensitivity: 5,  // 缩放灵敏度 1-10  默认5
        }, {
          type: 'drag-node',  // 拖拽节点
          delegateStyle: {strokeOpacity: 0.6, fillOpacity: 0.6}, // 节点拖拽时的绘图属性
          updateEdge: true,  // 是否在拖拽时更新所有与之相连的边
          // enableDelegate: true,  // 在拖拽过程中是否用方框代替元素，也就是是否用方框选出来几个元素一起拖拽
        },{
           type: 'click-select',  // 点击选中节点或点击Canvas取消选中状态
           multiple: true,   // 是否允许多选
           trigger: 'shift',   // 按住shift键进行多选
      },{
        type: 'tooltip', // 节点文本提示
        // formatText( model ) {
        //   return model.XXX;
        // }
      },
      {
        type: 'edge-tooltip', // 移到边时触发，边与节点的提示样式或HTML结构不同 
        // formatText( model ) {
        //   return model.XXX;
        // }
      },{
        type: 'activate-relations',  // 当鼠标移到某节点时，突出显示该节点以及与其直接关联的节点和连线
        trigger: 'mouseenter',
        activeState: 'active',  // 活跃节点状态

      }
      ]
      }

       });
        // 边在各状态下的样式
      // tslint:disable-next-line: label-position

       // 节点的配置方法 3.graph.node(nodeFn) 配置
    //  this.graph.node((node: { id: any; }) => {
    //       return {
    //        id: node.id,
    //        shape: 'rect', // triangle节点和image节点的标签文本默认位置是：position：'bottom'，其他为center
    //        // tslint:disable-next-line: whitespace
    //        style:{
    //          fill: 'blue'
    //        }
    //      };
    //    });


     this.graph.data(this.initdata); // 读取数据
     this.graph.render();  // 渲染图
     this.graph.on('node:mouseenter', (evt: { item: any; }) => {
      const { item } = evt;
      this.graph.setItemState(item, 'hover', true);
     });
     this.graph.on('node:mouseleave', (evt: { item: any; }) => {
      const nodeItem = evt.item;
      // 设置目标节点的 hover 状态 false
      this.graph.setItemState(nodeItem, 'hover', false);
    });

    // 通过 fetch 函数异步加载远程的数据源
    //  const main = async () => {
    //     const response = await fetch('https://gw.alipayobjects.com/os/basement_prod/6cae02ab-4c29-44b2-b1fd-4005688febcb.json');
    //     const remoteData = await response.json();

    // 不同节点/边可以有不同的个性化配置
    //     const nodes = remoteData.nodes;
    //     nodes.forEach((node: { style: {}; class: any; shape: string; size: number[]; }) => {
    //       if (!node.style) {
    //         node.style = {};
    //       }
    //       switch (node.class) {         // 根据节点数据中的 class 属性配置图形
    //         case 'c0': {
    //           node.shape = 'circle';    // class = 'c0' 时节点图形为 circle
    //           break;
    //         }
    //         case 'c1': {
    //           node.shape = 'rect';       // class = 'c1' 时节点图形为 rect
    //           node.size = [35, 20];    // class = 'c1' 时节点大小
    //           break;
    //         }
    //         case 'c2': {
    //           node.shape = 'ellipse';    // class = 'c1' 时节点图形为 ellipse
    //           node.size = [35, 20];    // class = 'c2' 时节点大小
    //           break;
    //         }
    //       }
    //     });
    //  const edges = remoteData.edges;
    //  edges.forEach((edge: { style: { lineWidth?: any; }; weight: any; }) => {
    //          if (!edge.style) {
    //             edge.style = {};
    //         }
    //          edge.style.lineWidth = edge.weight;  // 边的粗细映射边数据中的 weight 属性数值
                // edge.style.lineWidth = edge.weight; 这个属性会覆盖前边设置的，可以将覆盖的样式移动到这边
                // 被覆盖的属性样式
    //    });

    //     this.graph.data(remoteData); // 加载远程数据
    //     this.graph.render();         // 渲染
    //  };
    //  main();







  }
}




