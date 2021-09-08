/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */

module.exports = {
  MONITORING: '监控',
  'Monitoring Center': '监控中心',
  'Physical Resources': '物理资源',
  PHYSICAL_RESOURCES_MONITORING: '物理资源监控',
  SERVICE_COMPONENT_MONITORING: '服务组件监控',
  'Application Resources': '应用资源',
  APPLICATION_RESOURCES: '应用资源',

  NODE_COUNT: '节点数量',
  CLUSTER_STATUS: '集群状态',
  'Cluster Monitors': '集群监控',
  'Cluster Resource Monitoring': '集群资源监控',
  ETCD_MONITORING: 'etcd 监控',
  'ETCD Service Status': 'etcd 服务状态',
  'ETCD Nodes': 'etcd 节点',
  SERVICE_STATUS: '服务状态',
  EXTERNAL_ETCD: '外部 etcd',
  API_SERVER_MONITORING: 'API Server 监控',
  SCHEDULER_MONITORING: '调度器监控',
  'Historical Monitoring': '历史监控',
  RESOURCE_USAGE_RANKING: '资源用量排行',
  'Usage Ranking': '用量排行',
  'Resources Usage': '资源用量',
  RESOURCE_USAGE: '资源用量',
  USAGE_RANKING: '用量排行',
  OUTBOUND_TRAFFIC: '网络流出速率',
  INBOUND_TRAFFIC: '网络流入速率',
  QUOTA: '配额',
  QUOTA_VALUE: '配额：{value}',
  'Resources Usage Trend': '资源用量趋势',
  'Physical Resources Usage': '物理资源用量',
  APPLICATION_RESOURCES_USAGE: '应用资源用量',
  PHYSICAL_RESOURCES: '物理资源',
  APPLICATION_RESOURCE_USAGE: '应用资源用量',
  PROJECT_CHANGE_TREND: '项目变化趋势',
  PROJECT_COUNT: '项目数量',
  CLUSTER_RESOURCE_USAGE: '集群资源用量',
  CLUSTER_NODE_STATUS: '集群节点状态',
  COMPONENT_STATUS: '组件状态',
  PHYSICAL_RESOURCE_STATUS: '物理资源状态',
  'Disk Usage': '磁盘使用量',
  'Disk Capacity': '磁盘容量',
  INODE_USAGE: 'Inode 用量',
  RUNNING_PODS: '运行中的容器组数量',
  'Abnormal Pods': '异常容器组',

  CONTROLLER_MANAGER: '管理控制中心',
  KUBERNETES_SCHEDULER: 'Kubernetes 调度器',
  SCHEDULER: '调度器',
  Node: '节点',

  SELECT_TIME_RANGE: '选择时间范围',
  CUSTOM_TIME_RANGE: '自定义时间范围',
  'Only Show Selected': '仅显示已选',
  'View All Replicas': '查看全部副本',
  'View All': '查看全部',
  VIEW_MORE: '查看更多',

  Interval: '间隔',
  Last: '最近',
  TIME_S: '{num} 秒',
  TIME_M: '{num} 分钟',
  TIME_H: '{num} 小时',
  TIME_D: '{num} 天',
  UTILIZATION: '使用率',
  RESOURCE_USAGE_TITLE: '资源用量',
  MONITORING_CLUSTER_DESC:
    '集群状态展示集群资源的概览和详情，您可以查看集群资源的监控数据和用量排行情况。',
  MONITORING_PHYSICAL_DESC: '监控集群物理资源的运行状态',
  MONITORING_APPLICATION_DESC:
    '应用资源提供应用资源用量的监控数据以及用量排行情况。',
  TIMERANGE_SELECTOR_MSG: '结束时间需晚于开始时间。',
  MONITORING_SELECT_LIMIT_MSG: '最多可以选择 10 个资源',

  second: '秒',
  ms: '毫秒',
  times: '次',
  'times/s': '次/秒',
  RAFT_PROPOSAL: 'Raft 提议',
  PROPOSAL_COMMIT_RATE: '提议提交速率',
  PROPOSAL_APPLY_RATE: '提议应用速率',
  PROPOSAL_FAILURE_RATE: '提议失败速率',
  PROPOSAL_PENDING_TOTAL: '排队提议数',
  DB_SIZE: '库大小',
  CLIENT_TRAFFIC: '客户端流量',
  RECEIVED: '接收',
  SENT: '发送',
  GRPC_STREAM_MESSAGES: 'gRPC 流式消息',
  WAL_FSYNC: 'WAL 日志同步时间',
  DB_FSYNC: '库同步时间',
  REQUEST_LATENCY: '请求延迟',
  'Total Average': '总均值',
  'APIs Average': 'APIs 均值',
  REQUEST_PER_SECOND: '每秒请求数',
  REQUEST: '请求',
  API_REQUESTS_PER_SECOND: '每秒 API 请求数',
  API_REQUEST_LATENCY: 'API 请求延迟',
  SCHEDULE_ATTEMPTS: '调度次数',
  SCHEDULING_RATE: '调度速率',
  SCHEDULING_LATENCY: '调度延迟',

  AVERAGE: '平均值',
  TOTAL_AVERAGE: '总均值',
  SUCCESS: '成功',
  ERROR: '错误',
  FAILURE: '失败',
  ETCD_NODE_TITLE: 'ETCD节点',
  ETCD_LEADER_TITLE: '是否有 Leader',
  ETCD_CHANGES_TITLE: '1 小时内 Leader 变更次数',
  ETCD_STATUS: '服务 <span>状态</span>',
  ETCD_PROPOSAL: 'Raft <span>提议</span>',
  ETCD_DB_SIZE: '库 <span>大小</span>',
  ETCD_CLIENT_TRAFFIC: '客户端 <span>流量</span>',
  REQUEST_LATENCY_TCAP: '请求 <span>延迟</span>',
  REQUEST_RATE: '请求 <span>速率</span>',
  SCHEDULE_ATTEMPTS_TCAP: '调度 <span>次数</span>',
  SCHEDULING_RATE_TCAP: '调度 <span>速率</span>',
  PROPOSAL_COMMITTED: '提议提交速率',
  PROPOSAL_APPLIED: '提议应用速率',
  PROPOSAL_FAILED: '提议失败速率',
  PROPOSAL_PENDING: '排队提议数',

  EDIT_TEMPLATE: '编辑模板',
  SAVE_TEMPLATE: '保存模板',

  'No Refreshing': '不刷新',

  GRAPH_COLORS: '图表配色',
  SINGLE_GRAPH_TYPE: '最常见的图表类型',
  SINGLE_GRAPH_TYPE_NAME: '基础图',
  STACKED_GRAPH_TYPE: '堆叠图',
  STACKED_GRAPH_TYPE_DESC: '适用于各大类总量及分量之间的对比显示',
  CHART_TYPES: '图表类型',
  GRAPH_TYPES: '图例类型',
  ADD_MONITOR_ITEM: '添加监控项',
  ADD_MONITOR_ROW: '添加监控组',
  MONITOR_TYPE_NO_SUPPORT: '当前不支持该类型',
  TABLE_SETTINGS: '表格设置',
  PER_PAGE_LINES: '每页行数',
  CUSTOM_DISPLAY_STYLE: '设置显示格式',
  CUSTOM_DISPLAY_MODAL_DESC: '根据需要定制Table中的显示格式',
  DATA_TYPE: '数据类型',
  DECIMALS: '精确位',
  THRESHOLD_FILL: '阈值填充',
  THRESHOLD_FILL_DESC: '可以设置阈值，数值超出后可以自动更改样式提示',
  HIGHT_RULES: '高亮规则',
  TIME_FORMAT: '时间格式',
  MONITOR_METRIC: '监控指标',
  DEBUGB_DATA: '调试数据',
  LINE_CHART: '折线图',
  BAR_CHART: '柱状图',
  SINGLE_STATE_CHART: '即时文本',
  APPLICABLE_SCENE: '适用场景',
  BASE_LINE_CHART: '基础折线图',
  STACK_LINE_CHART: '堆叠面积图',
  BASE_BAR_CHART: '基础柱状图',
  STACK_BAR_CHART: '堆叠柱状图',

  LINE_CHART_DESC: '折线图主要用来展示数据相随着时间推移的趋势或变化。',
  BASE_LINE_CHART_DESC:
    '折线图主要用来展示数据相随着时间推移的趋势或变化。折线图非常适合用于展示一个连续的二维数据，如某网站访问人数或商品销量价格的波动。',
  STACK_LINE_CHART_DESC:
    '堆积面积图是一种特殊的面积图，可以用来比较在一个区间内的多个变量。如果有多个数据系列，并想分析每个类别的部分到整体的关系，并展现部分量对于总量的贡献时，使用堆积面积图是非常合适的选择。',
  BAR_CHART_DESC:
    '柱状图是最常见的图表类型，通过使用水平或垂直方向柱子的高度来显示不同类别的数值。',
  BASE_BAR_CHART_DESC:
    '基础柱状图的一个轴显示正在比较的类别，而另一个轴代表对应的刻度值。',
  STACK_BAR_CHART_DESC:
    '堆叠柱状图是柱状图的扩展，不同的是，柱状图的数据值为并行排列，堆叠柱图则是一个个叠加起来的。它可以展示每一个分类的总量，以及该分类包含的每个小分类的大小及占比，因此非常适合处理部分与整体的关系。',
  SELECT_CHART_TYPE: '选择图表类型',
  SELECT_CHART_TYPE_MODAL_DESC: '选择您要添加的自定义图表类型',
  EMPTY_CHART_PLACEHOLDER: '图表将显示在此区域',
  DISPLAY_POSITION: '图表布局位置',
  DISPLAY_FORMAT: '显示格式',
  FIELD_NAME: '字段名称',
  COLUMN_NAME: '列名称',
  METRIC_NAME: '图例名称',
  GRAPH_NAME: '图表名称',
  TABLE: '表格',
  VALUE_FOMATER: '数据取值',
  Y_AXIS: 'Y轴',
  'Custom Monitoring': '自定义监控',
  CustomMonitorDashboards: '自定义监控面板',
  CustomMonitorDashboard: '自定义监控面板',
  CUSTOM_MONITORING: '自定义监控',
  CUSTOM_MONITOR_DESC:
    '自定义监控提供应用监控模板，您可以根据需求自定义监控面板。',
  CUSTOMMONITORDASHBOARD_CREATE_DESC:
    '您可以根据自己的需求自定义应用监控面板。',

  'Default Color': '默认配色',
  'Cool Color': '冷色调',
  'Warm Color': '暖色调',

  // Cluster Status
  DISK_USAGE: '磁盘用量',
  POD_COUNT: '容器组数量',
  USAGE: '用量',
  API_SERVER: 'API Server',
  AVERAGE_CPU_LOAD: 'CPU 平均负载',
  POD_USAGE: '容器组用量',
  DISK_THROUGHPUT: '磁盘吞吐',
  NETWORK_BANDWIDTH: '网络带宽',
  POD_STATUS: '容器组状态',
  NO_MONITORING_DATA_FOUND: '没有找到监控数据',
  NOT_ENABLED: '未启用',
  COMPLETED: '已完成',
  WARNING: '异常',
  REST_CREATE: 'CREATE',
  REST_DELETE: 'DELETE',
  NODE_IP_ADDRESS: '节点 IP 地址：{value}',

  // Application Resources
  WORKSPACES: '企业空间',
  ACCOUNTS: '帐户',
  PROJECT_PL: '项目',
  PROJECT_LOW: 'project',
  DEVOPS_PROJECT: 'DevOps 工程',
  DEVOPS_PROJECT_TCAP: 'DevOps 工程',
  DEVOPS_PROJECT_PL: 'DevOps 工程',
  DEVOPS_PROJECT_TCAP_PL: 'DevOps 工程',
  DEVOPS_PROJECT_LOW: 'DevOps 工程',
  DEVOPS_PROJECT_LOW_PL: 'DevOps 工程',
  PROJECTS: '项目',
  DEVOPS_PROJECTS: 'DevOps 工程',
  SERVICES: '服务',
  ROUTES: '应用路由',
  LAST_TIME: '最后 {value}',
  COUNT: '数量',

  // Custom Monitoring
  CUSTOM_MONITOR_DASHBOARD: '自定义监控面板',
  CUSTOM_MONITOR_DASHBOARD_CREATE_DESC: '您可以根据需求自定义应用监控面板。',
}
