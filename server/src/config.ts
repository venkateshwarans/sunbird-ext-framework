/**
 * @author Santhosh Vasabhaktula <santhosh@ilimi.in>
 */
import { FrameworkConfig } from "./interfaces";

export const defaultConfig: FrameworkConfig = {
    db: {
        cassandra: {
            contactPoints: ['127.0.0.1'],
            keyspace: 'core_framework_schema',
            defaultKeyspaceSettings: {
                replication: {
			        'class': 'SimpleStrategy',
  			        'replication_factor': '1'
		        }
            }
        },
        elasticsearch: {
            host: "127.0.0.1:9200",
            disabledApis: ["cat", "cluster", "indices", "ingest", "nodes", "remote", "snapshot", "tasks"]
        }
    },
    plugins: [],
    pluginBasePath: "",
    port: 9000 //default
};
