#!/usr/bin/env python3

from cohydra import ArgumentParser, Network, DockerNode, Scenario

from cohydra.visualization.netanimvisualization import NetAnimVisualization

def main():

    scenario = Scenario()

    net = Network("10.0.0.0", "255.255.255.0", delay='200ms')

    node1 = DockerNode('ping', docker_build_dir='./docker/ping')
    node1.color = (255, 0, 0)
    node1.position = (5, 5, 0)
    node2 = DockerNode('pong', docker_build_dir='./docker/pong')
    node2.color = (0, 255, 0)
    node2.position = (15, 5, 0)
    net.connect(node1)
    net.connect(node2)

    scenario.add_network(net)

    visualization = NetAnimVisualization()
    visualization.set_node_size(5.0)
    scenario.set_visualization(visualization)

    with scenario as sim:
        # To simulate forever, just do not specifiy the simulation_time parameter.
        sim.simulate(simulation_time=60)

if __name__ == "__main__":
    parser = ArgumentParser()
    parser.run(main)
