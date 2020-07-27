Search.setIndex({docnames:["api","api/cohydra.argparse","api/cohydra.channel","api/cohydra.channel.channel","api/cohydra.channel.csma","api/cohydra.channel.wifi","api/cohydra.command_executor","api/cohydra.command_executor.base","api/cohydra.command_executor.console","api/cohydra.command_executor.docker","api/cohydra.command_executor.local","api/cohydra.command_executor.ssh","api/cohydra.command_executor.util","api/cohydra.context","api/cohydra.events","api/cohydra.events.Event","api/cohydra.interface","api/cohydra.mobility_input","api/cohydra.mobility_input.mobility_input","api/cohydra.mobility_input.sumo","api/cohydra.network","api/cohydra.node","api/cohydra.node.base","api/cohydra.node.docker","api/cohydra.node.external","api/cohydra.node.ssh","api/cohydra.node.switch","api/cohydra.scenario","api/cohydra.simulation","api/cohydra.util","api/cohydra.visualization","api/cohydra.visualization.netanimvisualization","api/cohydra.visualization.visualization","api/cohydra.workflow","getting-started","index","installation","sumo"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.index":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api.rst","api/cohydra.argparse.rst","api/cohydra.channel.rst","api/cohydra.channel.channel.rst","api/cohydra.channel.csma.rst","api/cohydra.channel.wifi.rst","api/cohydra.command_executor.rst","api/cohydra.command_executor.base.rst","api/cohydra.command_executor.console.rst","api/cohydra.command_executor.docker.rst","api/cohydra.command_executor.local.rst","api/cohydra.command_executor.ssh.rst","api/cohydra.command_executor.util.rst","api/cohydra.context.rst","api/cohydra.events.rst","api/cohydra.events.Event.rst","api/cohydra.interface.rst","api/cohydra.mobility_input.rst","api/cohydra.mobility_input.mobility_input.rst","api/cohydra.mobility_input.sumo.rst","api/cohydra.network.rst","api/cohydra.node.rst","api/cohydra.node.base.rst","api/cohydra.node.docker.rst","api/cohydra.node.external.rst","api/cohydra.node.ssh.rst","api/cohydra.node.switch.rst","api/cohydra.scenario.rst","api/cohydra.simulation.rst","api/cohydra.util.rst","api/cohydra.visualization.rst","api/cohydra.visualization.netanimvisualization.rst","api/cohydra.visualization.visualization.rst","api/cohydra.workflow.rst","getting-started.rst","index.rst","installation.rst","sumo.rst"],objects:{"":{cohydra:[0,0,0,"-"]},"cohydra.argparse":{ArgumentParser:[1,1,1,""]},"cohydra.argparse.ArgumentParser":{add_argument:[1,2,1,""],add_argument_group:[1,2,1,""],add_mutually_exclusive_group:[1,2,1,""],add_subparsers:[1,2,1,""],convert_arg_line_to_args:[1,2,1,""],error:[1,2,1,""],exit:[1,2,1,""],format_help:[1,2,1,""],format_usage:[1,2,1,""],get_default:[1,2,1,""],parse_args:[1,2,1,""],parse_intermixed_args:[1,2,1,""],parse_known_args:[1,2,1,""],parse_known_intermixed_args:[1,2,1,""],print_help:[1,2,1,""],print_usage:[1,2,1,""],register:[1,2,1,""],run:[1,2,1,""],set_defaults:[1,2,1,""]},"cohydra.channel":{channel:[3,0,0,"-"],csma:[4,0,0,"-"],wifi:[5,0,0,"-"]},"cohydra.channel.channel":{Channel:[3,1,1,""]},"cohydra.channel.channel.Channel":{interfaces:[3,3,1,""],network:[3,3,1,""],nodes:[3,2,1,""],ns3_nodes_container:[3,3,1,""],prepare:[3,2,1,""]},"cohydra.channel.csma":{CSMAChannel:[4,1,1,""]},"cohydra.channel.csma.CSMAChannel":{csma_helper:[4,3,1,""],delay:[4,3,1,""],devices_container:[4,3,1,""],nodes:[4,2,1,""],prepare:[4,2,1,""],speed:[4,3,1,""]},"cohydra.channel.wifi":{WiFiChannel:[5,1,1,""]},"cohydra.channel.wifi.WiFiChannel":{WiFiDataRate:[5,1,1,""],WiFiStandard:[5,1,1,""],antennas:[5,3,1,""],channel:[5,3,1,""],channel_width:[5,3,1,""],data_rate:[5,3,1,""],devices_container:[5,3,1,""],frequency:[5,3,1,""],nodes:[5,2,1,""],prepare:[5,2,1,""],standard:[5,3,1,""],tx_power:[5,3,1,""],wifi:[5,3,1,""],wifi_mac_helper:[5,3,1,""]},"cohydra.channel.wifi.WiFiChannel.WiFiDataRate":{DSSS_RATE_11Mbps:[5,3,1,""],DSSS_RATE_1Mbps:[5,3,1,""],DSSS_RATE_2Mbps:[5,3,1,""],DSSS_RATE_5_5Mbps:[5,3,1,""],ERP_OFDM_RATE_12Mbps:[5,3,1,""],ERP_OFDM_RATE_18Mbps:[5,3,1,""],ERP_OFDM_RATE_24Mbps:[5,3,1,""],ERP_OFDM_RATE_36Mbps:[5,3,1,""],ERP_OFDM_RATE_48Mbps:[5,3,1,""],ERP_OFDM_RATE_54Mbps:[5,3,1,""],ERP_OFDM_RATE_6Mbps:[5,3,1,""],ERP_OFDM_RATE_9Mbps:[5,3,1,""],OFDM_RATE_12Mbps:[5,3,1,""],OFDM_RATE_18Mbps:[5,3,1,""],OFDM_RATE_24Mbps:[5,3,1,""],OFDM_RATE_36Mbps:[5,3,1,""],OFDM_RATE_48Mbps:[5,3,1,""],OFDM_RATE_54Mbps:[5,3,1,""],OFDM_RATE_6Mbps:[5,3,1,""],OFDM_RATE_9Mbps:[5,3,1,""],OFDM_RATE_BW_12Mbps:[5,3,1,""],OFDM_RATE_BW_18Mbps:[5,3,1,""],OFDM_RATE_BW_24Mbps:[5,3,1,""],OFDM_RATE_BW_27Mbps:[5,3,1,""],OFDM_RATE_BW_3Mbps:[5,3,1,""],OFDM_RATE_BW_4_5Mbps:[5,3,1,""],OFDM_RATE_BW_6Mbps:[5,3,1,""],OFDM_RATE_BW_9Mbps:[5,3,1,""]},"cohydra.channel.wifi.WiFiChannel.WiFiStandard":{WIFI_802_11a:[5,3,1,""],WIFI_802_11ac:[5,3,1,""],WIFI_802_11ax:[5,3,1,""],WIFI_802_11b:[5,3,1,""],WIFI_802_11g:[5,3,1,""],WIFI_802_11n:[5,3,1,""],WIFI_802_11n_5G:[5,3,1,""],WIFI_802_11p:[5,3,1,""]},"cohydra.command_executor":{base:[7,0,0,"-"],console:[8,0,0,"-"],docker:[9,0,0,"-"],local:[10,0,0,"-"],ssh:[11,0,0,"-"],util:[12,0,0,"-"]},"cohydra.command_executor.base":{CommandExecutor:[7,1,1,""],ExitCode:[7,4,1,""]},"cohydra.command_executor.base.CommandExecutor":{counter:[7,3,1,""],execute:[7,2,1,""],get_logger:[7,2,1,""],name:[7,3,1,""]},"cohydra.command_executor.base.ExitCode":{args:[7,3,1,""],with_traceback:[7,2,1,""]},"cohydra.command_executor.console":{ConsoleCommandExecutor:[8,1,1,""]},"cohydra.command_executor.console.ConsoleCommandExecutor":{execute:[8,2,1,""],get_logger:[8,2,1,""]},"cohydra.command_executor.docker":{DockerCommandExecutor:[9,1,1,""]},"cohydra.command_executor.docker.DockerCommandExecutor":{container:[9,3,1,""],execute:[9,2,1,""],get_logger:[9,2,1,""]},"cohydra.command_executor.local":{LocalCommandExecutor:[10,1,1,""],log_file:[10,5,1,""]},"cohydra.command_executor.local.LocalCommandExecutor":{execute:[10,2,1,""],get_logger:[10,2,1,""]},"cohydra.command_executor.ssh":{SSHCommandExecutor:[11,1,1,""],log_file:[11,5,1,""]},"cohydra.command_executor.ssh.SSHCommandExecutor":{client:[11,3,1,""],execute:[11,2,1,""],get_logger:[11,2,1,""],sudo:[11,3,1,""]},"cohydra.command_executor.util":{LogFile:[12,1,1,""],split_shell_arguments:[12,5,1,""],stringify_shell_arguments:[12,5,1,""]},"cohydra.command_executor.util.LogFile":{log:[12,2,1,""]},"cohydra.context":{Context:[13,1,1,""],DeferredItem:[13,1,1,""],NoContext:[13,1,1,""],SimpleContext:[13,1,1,""],ThreadLocalStack:[13,1,1,""],defer:[13,5,1,""]},"cohydra.context.Context":{add_error:[13,2,1,""],cancel:[13,2,1,""],cleanup:[13,2,1,""],current:[13,2,1,""],defer:[13,2,1,""],fails:[13,3,1,""]},"cohydra.context.DeferredItem":{args:[13,3,1,""],cancel:[13,2,1,""],cleanup:[13,2,1,""],ctx:[13,3,1,""],func:[13,3,1,""],kwargs:[13,3,1,""],name:[13,3,1,""]},"cohydra.context.NoContext":{add_error:[13,2,1,""],cancel:[13,2,1,""],cleanup:[13,2,1,""],current:[13,2,1,""],defer:[13,2,1,""]},"cohydra.context.SimpleContext":{add_error:[13,2,1,""],cancel:[13,2,1,""],cleanup:[13,2,1,""],current:[13,2,1,""],defer:[13,2,1,""]},"cohydra.context.ThreadLocalStack":{pop:[13,2,1,""],push:[13,2,1,""],stack:[13,2,1,""],top:[13,2,1,""]},"cohydra.events":{Event:[15,0,0,"-"],e:[14,5,1,""],event:[14,5,1,""],execute_events_on_simulation_end:[14,5,1,""]},"cohydra.events.Event":{Event:[15,1,1,""],EventPart:[15,1,1,""],e:[15,5,1,""],event:[15,5,1,""],event_worker:[15,5,1,""],execute_events_on_simulation_end:[15,5,1,""]},"cohydra.events.Event.Event":{after:[15,2,1,""],check_if:[15,2,1,""],execute:[15,2,1,""],s:[15,2,1,""],start:[15,2,1,""],start_on_simulation_end:[15,2,1,""],start_on_simulation_start:[15,2,1,""],when:[15,2,1,""]},"cohydra.interface":{Interface:[16,1,1,""]},"cohydra.interface.Interface":{address:[16,3,1,""],bridge_name:[16,2,1,""],connect_tap_to_bridge:[16,2,1,""],disconnect_tap_from_bridge:[16,2,1,""],ifname:[16,3,1,""],mac_address:[16,3,1,""],node:[16,3,1,""],ns3_device:[16,3,1,""],number:[16,3,1,""],pcap_file_name:[16,2,1,""],remove_bridge:[16,2,1,""],setup_bridge:[16,2,1,""],setup_veth_container_end:[16,2,1,""],setup_veth_pair:[16,2,1,""],tap_name:[16,2,1,""],veth_name:[16,2,1,""]},"cohydra.mobility_input":{mobility_input:[18,0,0,"-"],sumo:[19,0,0,"-"]},"cohydra.mobility_input.mobility_input":{MobilityInput:[18,1,1,""]},"cohydra.mobility_input.mobility_input.MobilityInput":{destroy:[18,2,1,""],name:[18,3,1,""],node_mapping:[18,3,1,""],prepare:[18,2,1,""],start:[18,2,1,""]},"cohydra.mobility_input.sumo":{SUMOMobilityInput:[19,1,1,""]},"cohydra.mobility_input.sumo.SUMOMobilityInput":{add_node_to_mapping:[19,2,1,""],config_path:[19,3,1,""],destroy:[19,2,1,""],prepare:[19,2,1,""],start:[19,2,1,""],step_counter:[19,3,1,""],step_length:[19,3,1,""],steps:[19,3,1,""],sumo_cmd:[19,3,1,""],sumo_host:[19,3,1,""],sumo_port:[19,3,1,""]},"cohydra.network":{Network:[20,1,1,""],network_address_helper:[20,5,1,""]},"cohydra.network.Network":{address_helper:[20,3,1,""],channels:[20,3,1,""],color:[20,3,1,""],connect:[20,2,1,""],network:[20,3,1,""],prepare:[20,2,1,""]},"cohydra.node":{"switch":[26,0,0,"-"],base:[22,0,0,"-"],docker:[23,0,0,"-"],external:[24,0,0,"-"],ssh:[25,0,0,"-"]},"cohydra.node.base":{Node:[22,1,1,""]},"cohydra.node.base.Node":{add_interface:[22,2,1,""],channels:[22,3,1,""],color:[22,3,1,""],command_executor:[22,3,1,""],execute_command:[22,2,1,""],go_offline:[22,2,1,""],go_online:[22,2,1,""],interfaces:[22,3,1,""],name:[22,3,1,""],ns3_node:[22,3,1,""],position:[22,3,1,""],prepare:[22,2,1,""],set_position:[22,2,1,""],wants_ip_stack:[22,2,1,""]},"cohydra.node.docker":{DockerNode:[23,1,1,""],expand_volume_shorthand:[23,5,1,""],log_to_file:[23,5,1,""]},"cohydra.node.docker.DockerNode":{add_interface:[23,2,1,""],build_docker_image:[23,2,1,""],command:[23,3,1,""],command_executor:[23,3,1,""],container:[23,3,1,""],container_pid:[23,3,1,""],cpus:[23,3,1,""],docker_build_dir:[23,3,1,""],docker_image:[23,3,1,""],docker_image_tag:[23,2,1,""],dockerfile:[23,3,1,""],environment_variables:[23,3,1,""],execute_command:[23,2,1,""],exposed_ports:[23,3,1,""],go_offline:[23,2,1,""],go_online:[23,2,1,""],memory:[23,3,1,""],prepare:[23,2,1,""],pull:[23,3,1,""],set_position:[23,2,1,""],setup_host_interfaces:[23,2,1,""],start_docker_container:[23,2,1,""],stop_docker_container:[23,2,1,""],volumes:[23,3,1,""],wants_ip_stack:[23,2,1,""]},"cohydra.node.external":{ExternalNode:[24,1,1,""]},"cohydra.node.external.ExternalNode":{add_interface:[24,2,1,""],bridge:[24,3,1,""],command_executor:[24,3,1,""],execute_command:[24,2,1,""],go_offline:[24,2,1,""],go_online:[24,2,1,""],ifname:[24,3,1,""],prepare:[24,2,1,""],remove_remote_address:[24,2,1,""],set_position:[24,2,1,""],setup_remote_address:[24,2,1,""],wants_ip_stack:[24,2,1,""]},"cohydra.node.ssh":{SSHNode:[25,1,1,""],default_ip:[25,5,1,""]},"cohydra.node.ssh.SSHNode":{add_interface:[25,2,1,""],execute_command:[25,2,1,""],go_offline:[25,2,1,""],go_online:[25,2,1,""],prepare:[25,2,1,""],remove_remote_address:[25,2,1,""],set_position:[25,2,1,""],setup_remote_address:[25,2,1,""],wants_ip_stack:[25,2,1,""]},"cohydra.node.switch":{SwitchNode:[26,1,1,""]},"cohydra.node.switch.SwitchNode":{add_interface:[26,2,1,""],bridge_device:[26,3,1,""],execute_command:[26,2,1,""],go_offline:[26,2,1,""],go_online:[26,2,1,""],prepare:[26,2,1,""],set_position:[26,2,1,""],wants_ip_stack:[26,2,1,""]},"cohydra.scenario":{Scenario:[27,1,1,""]},"cohydra.scenario.Scenario":{add_mobility_input:[27,2,1,""],add_network:[27,2,1,""],channels:[27,2,1,""],context:[27,3,1,""],networks:[27,3,1,""],nodes:[27,2,1,""],set_visualization:[27,2,1,""],simulation:[27,3,1,""],visualization:[27,3,1,""],workflow:[27,2,1,""],workflows:[27,3,1,""]},"cohydra.simulation":{Simulation:[28,1,1,""]},"cohydra.simulation.Simulation":{docker_client:[28,3,1,""],hosts:[28,3,1,""],log_directory:[28,3,1,""],prepare:[28,2,1,""],scenario:[28,3,1,""],simulate:[28,2,1,""],started:[28,3,1,""],workflows:[28,3,1,""]},"cohydra.util":{network_color_for:[29,5,1,""],once:[29,5,1,""],unique:[29,5,1,""],unique_generator:[29,5,1,""]},"cohydra.visualization":{netanimvisualization:[31,0,0,"-"],visualization:[32,0,0,"-"]},"cohydra.visualization.netanimvisualization":{NetAnimVisualization:[31,1,1,""]},"cohydra.visualization.netanimvisualization.NetAnimVisualization":{animation_interface:[31,3,1,""],get_visualization:[31,2,1,""],prepare_node:[31,2,1,""],set_node_position:[31,2,1,""],set_node_size:[31,2,1,""],set_output_directory:[31,2,1,""],set_visualization:[31,2,1,""]},"cohydra.visualization.visualization":{NoVisualization:[32,1,1,""],Visualization:[32,1,1,""]},"cohydra.visualization.visualization.NoVisualization":{get_visualization:[32,2,1,""],prepare_node:[32,2,1,""],set_node_position:[32,2,1,""],set_node_size:[32,2,1,""],set_output_directory:[32,2,1,""],set_visualization:[32,2,1,""]},"cohydra.visualization.visualization.Visualization":{get_visualization:[32,2,1,""],node_size:[32,3,1,""],output_directory:[32,3,1,""],prepare_node:[32,2,1,""],set_node_position:[32,2,1,""],set_node_size:[32,2,1,""],set_output_directory:[32,2,1,""],set_visualization:[32,2,1,""]},"cohydra.workflow":{Workflow:[33,1,1,""]},"cohydra.workflow.Workflow":{current_waiting_events:[33,3,1,""],sleep:[33,2,1,""],start:[33,2,1,""],stop:[33,2,1,""],stop_event:[33,3,1,""],task:[33,3,1,""],wait_until:[33,2,1,""],wait_until_true:[33,2,1,""]},cohydra:{"interface":[16,0,0,"-"],argparse:[1,0,0,"-"],channel:[2,0,0,"-"],command_executor:[6,0,0,"-"],context:[13,0,0,"-"],events:[14,0,0,"-"],mobility_input:[17,0,0,"-"],network:[20,0,0,"-"],node:[21,0,0,"-"],scenario:[27,0,0,"-"],simulation:[28,0,0,"-"],util:[29,0,0,"-"],visualization:[30,0,0,"-"],workflow:[33,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","exception","Python exception"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:exception","5":"py:function"},terms:{"0ms":4,"100mbp":4,"128m":23,"4ghz":5,"5ghz":5,"64kbp":4,"abstract":[1,3,7,18,22,32],"case":36,"catch":[10,28],"class":[1,3,4,5,7,8,9,10,11,12,13,15,16,18,19,20,22,23,24,25,26,27,28,31,32,33,37],"default":[1,19,25,31,32],"enum":5,"export":37,"float":[5,19,22,23,24,25,26,28,31,32,33],"function":[1,10,11,12,13,15,16,18,20,22,23,24,25,26,29,33],"import":[31,32,37],"int":[5,7,19,20,29],"new":[27,31,32,36,37],"null":[8,13,32],"return":[1,3,4,5,7,13,16,22,23,24,25,26,27,29,31,32],"static":[13,31,32,33],"super":32,"true":[1,22,23,24,25,26,33],"var":36,But:36,For:[3,4,19,37],IDs:[18,37],Not:[22,23,24,25,26],The:[1,3,4,5,7,8,9,10,11,12,13,16,18,19,20,22,23,24,25,26,27,28,29,31,32,33,36,37],There:[32,36,37],These:[20,33],Use:[3,5,28],Using:35,With:35,__traceback__:7,abc:[31,32],abort:28,absolut:[23,37],access:[36,37],accordingli:37,achievd:37,activ:33,add:[13,22,23,24,25,26,27,36,37],add_argu:1,add_argument_group:1,add_error:13,add_help:1,add_interfac:[16,22,23,24,25,26],add_mobility_input:[27,37],add_mutually_exclusive_group:1,add_network:27,add_node_to_map:[19,37],add_subpars:1,added:36,adding:16,address:[16,20,23,24,25],address_help:20,after:[15,36,37],afterward:1,afunct:13,againt:33,all:[3,4,5,20,22,23,24,25,26,27,28,32,33,36,37],allow:[23,33,36],allow_abbrev:1,alphanumer:23,alread:24,alreadi:[19,20],also:[16,20,24,25,28,37],alwai:23,amount:23,ani:[13,16,18],anim:31,animation_interfac:31,anoth:[5,13],anotherfunct:13,antenna:5,api:35,append:[7,8,9,10,11,22,23,24,25,26],apt:37,arg:[1,7,13,26],arg_lin:1,argument:[1,13,19,20],argument_default:1,argumentpars:1,arn:33,assign:[13,16,20,23,24,25],assum:37,automat:37,avail:[5,29],awai:[1,7],back:[22,23,24,25,26],band:5,base:[1,3,4,5,8,9,10,11,12,13,15,16,18,19,20,23,24,25,26,27,28,29,31,32,33,36,37],bash:[7,8,9,10,11,37],beaver:36,becaus:37,been:36,befor:24,behaviour:21,being:[28,33],belong:[3,13,27],below:36,best:5,between:[5,20,26],bind:36,bionic:36,bitrat:5,block:33,blue:29,blueprint:27,boockmey:33,bool:[1,11,22,23,24,25,26],bridg:[16,23,24,25],bridge_devic:26,bridge_nam:16,build:[20,23,36],build_docker_imag:23,buster:36,cabl:[3,4,20],calcul:[25,29],call:[1,13,18,20,22,23,24,25,26,32,33],callabl:[1,13,27,33],can:[5,6,7,13,16,18,19,20,23,27,28,35,36,37],cancel:13,cannel:22,cannot:37,cap:[36,37],capabl:3,car0:37,car:37,card:[3,16,22],care:28,cfg:[19,37],channel:[16,20,22,23,24,25,26,27],channel_typ:20,channel_width:5,charact:23,check:28,check_if:15,choos:5,cleanup:13,cli:36,client:[11,28],clone:36,code:[7,31],cohydra:36,collid:5,collis:[3,4],color:[20,22,29],com:33,combin:6,come:33,command:[6,7,8,9,10,11,12,15,19,22,23,24,25,26,33,37],command_executor:[22,23,24],commandexecutor:[6,7,8,9,10,11],compar:[20,33],compon:21,comput:[22,23],condit:[15,33],conect:20,config:37,config_path:[19,37],configur:[19,20,23,27,37],conflict_handl:1,connect:[2,3,4,5,11,16,19,20,22,23,24,25,26,35],connect_tap_to_bridg:16,consid:[5,24],consist:23,consolecommandexecutor:8,constraint:16,contain:[3,7,9,13,16,19,20,23,31,33,35,36,37],container_pid:23,content:35,context:[23,27],continu:28,control:[16,18],convert_arg_line_to_arg:1,correct:5,correctli:16,could:[5,20],counter:7,cours:[5,36],cpu:23,creat:[5,27,31,33,36],creation:[20,37],creator:23,csma:[3,20],csma_help:4,csmachannel:[4,20],ctrl:28,ctx:13,current:[13,27,31,32],current_waiting_ev:33,dasylab:33,data:5,data_r:5,dbm:5,debian:[36,37],debug:[1,8,18],decor:33,def:33,default_ip:25,defer:13,deferreditem:13,defin:[1,30],delai:4,delet:16,depend:[5,36],describ:[17,28],descript:[1,13],dest:1,destroi:[16,18,19],detail:31,determin:28,dev:36,devcontain:19,develop:36,devic:[4,5,16,24,25,26],devices_contain:[4,5],diagramm:[1,3,4,5,7,8,9,10,11,12,13,15,16,18,19,20,22,23,24,25,26,27,28,31,32,33],dict:[13,16,23],dictionari:23,dictonari:23,directli:37,directori:[23,28,31,32,36],disconnect:[16,22,23,24,25,26],disconnect_tap_from_bridg:16,displai:[32,37],do_another_th:33,do_someth:33,doc:37,docker:[19,20,28,35],docker_build_dir:23,docker_cli:28,docker_fil:23,docker_imag:23,docker_image_tag:23,dockercommandexecutor:9,dockerfil:[23,36],dockernod:[16,23],doe:[13,18,19,32],domain:[3,4],don:20,done:33,down:13,dry:8,dsss_rate_11mbp:5,dsss_rate_1mbp:5,dsss_rate_2mbp:5,dsss_rate_5_5mbp:5,dsssrate11mbp:5,dsssrate1mbp:5,dsssrate2mbp:5,dsssrate5_5mbp:5,durat:33,dure:[6,23,24,25,33],each:[19,23,32],easiest:36,effect:19,either:[1,37],enabl:36,enforc:23,ensur:37,enter:37,entri:23,env:37,environ:[19,23,37],environment_vari:23,epilog:1,equal:33,equival:[3,4,16],erp_ofdm_rate_12mbp:5,erp_ofdm_rate_18mbp:5,erp_ofdm_rate_24mbp:5,erp_ofdm_rate_36mbp:5,erp_ofdm_rate_48mbp:5,erp_ofdm_rate_54mbp:5,erp_ofdm_rate_6mbp:5,erp_ofdm_rate_9mbp:5,erpofdmrate12mbp:5,erpofdmrate18mbp:5,erpofdmrate24mbp:5,erpofdmrate36mbp:5,erpofdmrate48mbp:5,erpofdmrate54mbp:5,erpofdmrate6mbp:5,erpofdmrate9mbp:5,err:13,error:[1,13],etc:37,eth0:[24,25],eth:[22,23,24,25],ethernet:4,evalu:33,event:33,event_work:15,eventpart:15,everi:[15,19,33],exampl:[1,16,20,23,27,28,33,37],except:[1,7,13],execpt:10,execut:[7,8,9,10,11,13,15,22,23,24,25,26,27,28,33,36,37],execute_command:[22,23,24,25,26],execute_events_on_simulation_end:[14,15],executor:[7,8,9,10,11,22,23,24],exist:24,exit:[1,7],exitcod:7,expand:23,expand_volume_shorthand:23,expected_result:33,explain:37,expos:23,exposed_port:23,express:[15,33],extens:36,extern:[16,17,18,19,25,35],externalnod:[24,25],extra_host:23,fail:13,fals:[11,23],far:36,fault:[33,35],featur:[22,23,24,25,26],file:[1,7,8,9,10,11,16,23,28,31,37],find:37,first:5,flag:1,folder:37,follow:[27,31],form:23,format:31,format_help:1,format_usag:1,formatter_class:1,found:5,frequenc:5,from:[5,22,23,24,25,26,31,32,36,37],fromfile_prefix_char:1,func:[13,27,29],further:[5,33],furthermor:37,gener:20,get:[18,27,32,35,37],get_default:1,get_logg:[7,8,9,10,11],get_visu:[31,32],github:33,give:[31,32],given:[20,25],global:[19,33],global_var:15,global_vari:33,go_offlin:[22,23,24,25,26],go_onlin:[22,23,24,25,26],goe:10,going:18,green:29,group:37,gui:37,hand:31,handl:[22,23,24,25,26],hardwar:[24,35],has:[19,22,23,30,36],have:[16,18,36,37],help:12,helper:[4,5,20],helpformatt:1,here:[5,16],host:[10,11,19,23,24,25,28,35,36],hostnam:[23,37],how:[17,19,37],http:[5,33],hue:29,hybrid:35,identifi:[16,18],ieee_802:5,ifnam:[16,24,25],ignor:[5,32],imag:[23,36,37],implement:13,includ:24,incomplet:5,incorpor:1,index:[20,29,35],indic:[11,22,23,24,25,26,28,33],influxdb:28,info:[1,33],inform:5,inherit:[1,3,4,5,7,8,9,10,11,12,13,15,16,18,19,20,22,23,24,25,26,27,28,31,32,33],initi:[28,37],inject:[33,35],input:[18,19],insert:20,insid:23,instal:[19,22,23,24,25,26,35],instanc:[19,20,23,29],instanti:[3,16],instead:28,instruct:[19,33],intent:13,interfac:[3,17,18,19,22,23,24,25,26,30,31,36],intern:[3,12,16,22,23,26,29],ipv6:20,item:[13,23],iter:[28,29],its:35,just:[8,37],kei:23,key_valu:23,keyword:[13,20],kind:[8,24,27],kwarg:[1,13,20,26],label:23,lambda_expr:15,lan:[3,4],later:[13,16],latest:[36,37],layer:5,length:19,level:[1,10,11,12],librari:[36,37],like:[13,33,37],line:12,link:3,list:[3,4,5,13,20,22,23,24,25,26,27,33],listen:37,load:37,local:[19,33,35],local_var:15,local_vari:33,localcommandexecutor:10,localhost:[19,37],log:[1,3,4,5,7,8,9,10,11,12,13,16,18,23,28],log_directori:[23,28],log_fil:[10,11],log_path:23,log_to_fil:23,logfil:[10,11,12],logger:[1,7,8,9,10,11,12],logger_arg:1,login:25,look:37,mac:[5,16],mac_address:16,machin:37,mai:16,main:[1,21,36],make:[5,36,37],mani:20,manipul:35,manual:[20,22,23,24,25,26,28,33],map:[18,23,28,37],mask:20,maximum:5,mbit:5,mean:23,memmori:23,memori:23,messag:1,method:29,mhz:5,mobil:19,mobility_input:[27,37],mobilityinput:[17,18,19,27],mode:19,model:[9,22],modifi:[28,36],modul:35,monitor:28,more:[5,20],mount:[36,37],move:[17,37],movement:37,multipl:[18,30],must:[20,23,37],name:[1,7,8,9,10,11,13,16,18,19,22,23,24,25,26,37],namespac:[1,16,37],neccesari:[22,26],neccessari:[18,20,36],necessari:20,need:[13,16,19,20,24,33,36,37],net:[36,37],netanim:[31,36],netmask:20,network:[0,3,4,5,16,22,23,24,25,26,27,28,29,35,36,37],network_address:20,network_address_help:20,network_color_for:29,network_index:20,new_node_s:[31,32],new_output_directori:[31,32],nocontext:[13,32],node:[2,3,4,5,7,16,17,18,19,20,27,28,31,32,37],node_map:18,node_s:32,none:[1,3,4,5,7,8,9,10,11,13,15,16,18,19,20,22,23,24,25,26,27,28,31,32,33],normal:36,note:37,noth:[13,32],novisu:32,now:37,ns3:24,ns3_devic:16,ns3_node:22,ns3_nodes_contain:3,number:[5,13,16,19,22,23,24,25,26,29],number_of_network:29,obj_typ:[19,37],object:[1,3,7,8,12,13,15,16,18,20,22,27,28,31,32,33],obtain:36,ofdm_rate_12mbp:5,ofdm_rate_18mbp:5,ofdm_rate_24mbp:5,ofdm_rate_36mbp:5,ofdm_rate_48mbp:5,ofdm_rate_54mbp:5,ofdm_rate_6mbp:5,ofdm_rate_9mbp:5,ofdm_rate_bw_12mbp:5,ofdm_rate_bw_18mbp:5,ofdm_rate_bw_24mbp:5,ofdm_rate_bw_27mbp:5,ofdm_rate_bw_3mbp:5,ofdm_rate_bw_4_5mbp:5,ofdm_rate_bw_6mbp:5,ofdm_rate_bw_9mbp:5,ofdmrate12mbp:5,ofdmrate12mbpsbw10mhz:5,ofdmrate18mbp:5,ofdmrate18mbpsbw10mhz:5,ofdmrate24mbp:5,ofdmrate24mbpsbw10mhz:5,ofdmrate27mbpsbw10mhz:5,ofdmrate36mbp:5,ofdmrate3mbpsbw10mhz:5,ofdmrate48mbp:5,ofdmrate4_5mbpsbw10mhz:5,ofdmrate54mbp:5,ofdmrate6mbp:5,ofdmrate6mbpsbw10mhz:5,ofdmrate9mbp:5,ofdmrate9mbpsbw10mhz:5,offer:30,onc:29,one:[3,4,20],onli:[19,23,29,36],onto:[22,23,24,25,26,37],open:[23,36],oppertun:[31,32],option:[1,16,19,20,23],option_str:1,order:[16,33,36,37],org:5,osmhpi:[36,37],other:[5,18,26],otherwis:36,out:[8,22,23,24,25,26],output:[7,8,9,10,11,23,31,32],output_directori:32,over:[11,28],overal:[1,29],overrid:[1,23],packag:[24,26],page:35,pair:[16,23],paramet:[1,3,4,5,7,8,9,10,11,13,16,18,19,20,22,23,24,25,26,27,28,29,31,32,33],paramiko:11,parent:1,pars:1,parse_arg:1,parse_intermixed_arg:1,parse_known_arg:1,parse_known_intermixed_arg:1,parser:1,particip:37,pass:[1,5,13,20,33,37],passwd:37,password:25,path:[7,8,9,10,11,12,19,23,37],pcap:16,pcap_file_nam:16,peer:16,per:29,physic:[3,4,5,20,24,25],pick:5,pid:[23,36,37],pip:36,plan:33,pleas:[5,19,24,33,37],pop:13,port:[19,23,37],posit:[13,18,22,23,24,25,26,31,32],possibl:23,power:5,prebuilt:[19,36],prefix:[22,23,24,25,26],prefix_char:1,prepar:[3,4,5,18,19,20,22,23,24,25,26,27,28,31,32],prepare_nod:[31,32],prepend:12,prerequesit:37,prevent:1,print:[1,8],print_help:1,print_usag:1,privileg:[36,37],probabl:19,proce:37,produc:31,prog:1,project:[13,36],properli:[33,37],properti:[3,4,5,13,16,23],provid:[20,33,36,37],pull:[23,37],purpos:[7,8,13,18,28,36],push:13,put:23,python3:36,python:[1,33,36,37],pythonpath:36,queue:15,rais:[1,10],random:16,raspberri:25,rate:5,raw:5,reach:16,reachabl:25,read:5,real:24,receiv:4,recommend:36,red:29,refer:[19,27,35],regist:1,registri:23,registry_nam:1,rel:23,relat:[31,32],reli:37,remot:[11,19,24,25,36],remov:[24,25],remove_bridg:16,remove_remote_address:[24,25],repetit:1,repositori:[36,37],repres:[22,23,24,25,26],requir:36,resembl:[3,4,8,16],result:[15,32],retriev:[7,8,9,10,11,27],return_cod:15,return_valu:15,root:36,rout:[24,26],run:[1,6,7,8,9,10,11,13,18,19,22,23,24,25,27,28,29,36],runtim:[23,28],same:37,scenario:[0,1,19,28,31,33,35,36],script:[23,24],search:35,second:[15,19,28,33],see:[5,16,23,33,37],self:7,send:5,sequenc:33,server:[19,37],set:[1,5,7,16,19,22,23,24,25,26,27,28,31,32,37],set_default:1,set_node_posit:[31,32],set_node_s:[31,32],set_output_directori:[31,32],set_posit:[22,23,24,25,26],set_visu:[27,31,32],setup:[16,23,24,25,37],setup_bridg:16,setup_host_interfac:23,setup_log:1,setup_remote_address:[24,25],setup_veth_container_end:16,setup_veth_pair:16,shadow:37,shall:[22,23,24,25,26],share:37,shell:[7,8,9,10,11,22],should:[1,20,23],show:37,side:16,simpl:[1,13],simplecontext:13,simul:[0,1,3,4,5,6,10,13,17,18,19,20,21,22,23,24,25,26,27,32,33,35,36],simulation_tim:[27,28],singl:20,site:16,size:[31,32],sleep:33,sock:36,socket:36,solut:36,some:[8,33,36,37],someth:[10,23],sourc:[1,3,4,5,7,8,9,10,11,12,13,14,15,16,18,19,20,22,23,24,25,26,27,28,29,31,32,33],space:33,spatial:5,specif:[13,29,33],specifi:[7,19,22,23,24,25,26],spectrum:29,speed:4,split_shell_argu:12,sshclient:11,sshcommandexecutor:11,sshnode:25,stack:[13,22,23,24,25,26],standard:[5,23],start:[15,18,19,23,27,28,33,35,37],start_docker_contain:23,start_on_simulation_end:15,start_on_simulation_start:15,startup:23,statu:1,stderr:[1,7,8,9,10,11,23],stderr_logfil:[7,8,9,10,11],stdout:[7,8,9,10,11,23],stdout_logfil:[7,8,9,10,11],step:[19,22,26],step_count:19,step_length:19,steplength:19,stop:[10,18,19,23,33],stop_docker_contain:23,stop_ev:33,store:[7,13],str:[1,4,7,8,9,10,11,13,16,18,19,20,22,23,24,25,26,31,32],stream:[5,23],string:[1,5,23],stringify_shell_argu:12,subclass:[1,20],subnet:[20,25],successfulli:29,sudo:[11,37],sudoer:37,sumo:35,sumo_cmd:19,sumo_hom:[19,37],sumo_host:[19,37],sumo_port:[19,37],sumo_vehicle_id:19,sumocfg:37,sumomobilityinput:[19,37],suppli:[22,23,24,25,26],support:[19,20,22,23,24,25,26,33],sure:[5,10,36,37],switchnod:26,tag:23,take:[25,28],tap:[16,23],tap_nam:16,task:33,tbd:34,tear:13,teardown:[13,18,27],test:36,testb:[0,19,33,37],them:[1,20,23,28,36],therefor:[13,32,36],thereful:6,thi:[1,3,4,5,7,8,9,10,11,13,16,18,19,20,22,23,24,25,26,28,33,37],though:[36,37],thread:[19,33],threadlocalstack:13,through:19,time:[4,23],timeout:28,timestamp:12,titl:37,tmp:37,togeth:20,too:[5,36],tool:37,top:13,torn:13,traci:[19,37],transmiss:4,transmit:4,tupl:23,two:[5,19,37],tx_power:5,type:[3,4,5,7,8,9,10,11,16,22,23,24,25,26,27],ubuntu:36,understand:23,uniqu:[16,18,22,29],unique_gener:29,unix:37,unnam:[7,8],unqiu:16,untest:20,until:[28,33],usag:1,use:[1,5,7,8,9,10,11,13,19,20,23,24,31,32,33,36,37],used:[1,2,6,13,16,18,20,22,24,25,27,28,37],useful:[6,8,13,23,24],user:[7,8,9,10,11,22,23,24,25,26,30,37],usern:[36,37],usernam:25,uses:[26,35,37],using:[5,19,31,36,37],usr:37,valid:[1,4,5],valu:[1,4,5,23,29,33],variabl:[19,23,33,37],variant:35,vcpu:23,vehicl:[19,37],verbos:1,version:[19,37],veth:[16,23],veth_nam:16,via:[4,18,19,25,36],virtual:23,visual:[20,22,27],volum:[23,36,37],volumes_and_port:23,vscode:36,wai:[27,37],wait:33,wait_until:33,wait_until_tru:33,want:[13,36],wants_ip_stack:[22,23,24,25,26],warn:[3,10,16,19,20,22,23,24,25,26,33],whatev:13,when:[15,19,22,23,24,25,26,33],where:19,whether:[1,11,22,23,24,25,26,28],which:[19,28,31],width:5,wifi:22,wifi_802_11a:5,wifi_802_11ac:5,wifi_802_11ax:5,wifi_802_11b:5,wifi_802_11g:5,wifi_802_11n:5,wifi_802_11n_5g:5,wifi_802_11p:5,wifi_mac_help:5,wifichannel:[5,20],wifidatar:5,wifistandard:5,wiki:5,wikipedia:5,wireless:[5,37],with_traceback:7,within:[16,22,23,24,25,26,36,37],without:[19,35,37],work:[19,22,23,24,25,26,33,36],workflow:[6,23,24,27,28],workflow_function_nam:33,workspac:37,would:[3,4],write:[0,23,35],wrong:10,x11:37,xml:31,you:[1,5,7,13,16,19,24,33,36,37],your:[5,13,16,36,37],yourself:[3,16,28,36]},titles:["API Reference","cohydra.argparse","cohydra.channel","cohydra.channel.channel","cohydra.channel.csma","cohydra.channel.wifi","cohydra.command_executor","cohydra.command_executor.base","cohydra.command_executor.console","cohydra.command_executor.docker","cohydra.command_executor.local","cohydra.command_executor.ssh","cohydra.command_executor.util","cohydra.context","cohydra.events","cohydra.events.Event","cohydra.interface","cohydra.mobility_input","cohydra.mobility_input.mobility_input","cohydra.mobility_input.sumo","cohydra.network","cohydra.node","cohydra.node.base","cohydra.node.docker","cohydra.node.external","cohydra.node.ssh","cohydra.node.switch","cohydra.scenario","cohydra.simulation","cohydra.util","cohydra.visualization","cohydra.visualization.netanimvisualization","cohydra.visualization.visualization","cohydra.workflow","Getting Started","cohydra - It\u2019s A Testbed! :)","Installation","Using SUMO With cohydra"],titleterms:{"switch":26,Using:37,With:[36,37],api:0,argpars:1,base:[7,22],channel:[2,3,4,5],cohydra:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,35,37],command_executor:[6,7,8,9,10,11,12],connect:37,consol:8,context:13,csma:4,docker:[9,23,36,37],event:[14,15],extern:24,get:34,host:37,indic:35,instal:[36,37],instanc:37,interfac:16,local:[10,36,37],mobility_input:[17,18,19],mode:37,netanimvisu:31,network:20,node:[21,22,23,24,25,26],refer:0,remot:37,run:37,scenario:[27,37],simul:[28,37],ssh:[11,25],start:34,sumo:[19,37],tabl:35,testb:35,util:[12,29],variant:37,visual:[30,31,32],wifi:5,without:36,workflow:33,write:37}})