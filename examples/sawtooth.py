#!/usr/bin/env python3

# Warning: This contains the old networking logic. See #46

from cohydra import ArgumentParser, Network, DockerNode, SwitchNode, Scenario

def main():
    scenario = Scenario()

    net = Network("10.0.0.0", "255.255.255.0")

    bridge = SwitchNode('br-1')

    validator = DockerNode('validator', docker_build_dir='./docker/sawtooth', dockerfile='validator.Dockerfile')
    net.connect(validator, bridge, delay='0', speed='1000Mbps')

    settings_tp = DockerNode('set-tp', docker_build_dir='./docker/sawtooth', dockerfile='settings-tp.Dockerfile')
    net.connect(settings_tp, bridge, delay='0', speed='1000Mbps')

    intkey_tp = DockerNode('intkey', docker_build_dir='./docker/sawtooth', dockerfile='intkey-tp.Dockerfile')
    net.connect(intkey_tp, bridge, delay='0', speed='1000Mbps')

    rest_api = DockerNode('rest-api', docker_build_dir='./docker/sawtooth', dockerfile='rest-api.Dockerfile')
    net.connect(rest_api, bridge, delay='0', speed='1000Mbps')

    shell = DockerNode('shell', docker_build_dir='./docker/sawtooth', dockerfile='shell.Dockerfile')
    net.connect(shell, bridge, delay='0', speed='1000Mbps')

    scenario.add_network(net)
    with scenario as sim:
        # To simulate forever, just do not specifiy the simulation_time parameter.
        sim.simulate()

if __name__ == "__main__":
    parser = ArgumentParser()
    parser.run(main)
