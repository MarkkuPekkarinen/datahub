"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4653],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||r;return n?o.createElement(m,l(l({ref:t},u),{},{components:n})):o.createElement(m,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={title:"Integrating with Confluent Cloud",slug:"/deploy/confluent-cloud",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/deploy/confluent-cloud.md"},l="Integrating with Confluent Cloud",i={unversionedId:"docs/deploy/confluent-cloud",id:"docs/deploy/confluent-cloud",title:"Integrating with Confluent Cloud",description:"DataHub provides the ability to easily leverage Confluent Cloud as your Kafka provider. To do so, you'll need to configure DataHub to talk to a broker and schema registry hosted by Confluent.",source:"@site/genDocs/docs/deploy/confluent-cloud.md",sourceDirName:"docs/deploy",slug:"/deploy/confluent-cloud",permalink:"/docs/deploy/confluent-cloud",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/deploy/confluent-cloud.md",tags:[],version:"current",frontMatter:{title:"Integrating with Confluent Cloud",slug:"/deploy/confluent-cloud",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/deploy/confluent-cloud.md"},sidebar:"overviewSidebar",previous:{title:"Configuring Kafka",permalink:"/docs/how/kafka-config"},next:{title:"No Code Upgrade (In-Place Migration Guide)",permalink:"/docs/advanced/no-code-upgrade"}},s={},c=[{value:"<strong>Step 1: Create topics in Confluent Control Center</strong>",id:"step-1-create-topics-in-confluent-control-center",level:2},{value:"Step 2: Configure DataHub Container to use Confluent Cloud Topics",id:"step-2-configure-datahub-container-to-use-confluent-cloud-topics",level:2},{value:"Docker Compose",id:"docker-compose",level:3},{value:"DataHub Actions",id:"datahub-actions",level:4},{value:"Helm",id:"helm",level:3},{value:"DataHub Actions",id:"datahub-actions-1",level:4},{value:"Contribution",id:"contribution",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"integrating-with-confluent-cloud"},"Integrating with Confluent Cloud"),(0,a.kt)("p",null,"DataHub provides the ability to easily leverage Confluent Cloud as your Kafka provider. To do so, you'll need to configure DataHub to talk to a broker and schema registry hosted by Confluent."),(0,a.kt)("p",null,"Doing this is a matter of configuring the Kafka Producer and Consumers used by DataHub correctly. There are 2 places where Kafka configuration should be provided: the metadata service (GMS) and the frontend server (datahub-frontend). Follow the steps below to configure these components for your deployment."),(0,a.kt)("h2",{id:"step-1-create-topics-in-confluent-control-center"},(0,a.kt)("strong",{parentName:"h2"},"Step 1: Create topics in Confluent Control Center")),(0,a.kt)("p",null,"First, you'll need to create following new topics in the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/control-center/index.html"},"Confluent Control Center"),". By default they have the following names:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"MetadataChangeProposal_v1")," "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"FailedMetadataChangeProposal_v1")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"MetadataChangeLog_Versioned_v1")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"MetadataChangeLog_Timeseries_v1")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"DataHubUsageEvent_v1"),": User behavior tracking event for UI"),(0,a.kt)("li",{parentName:"ol"},"(Deprecated) ",(0,a.kt)("strong",{parentName:"li"},"MetadataChangeEvent_v4"),": Metadata change proposal messages"),(0,a.kt)("li",{parentName:"ol"},"(Deprecated) ",(0,a.kt)("strong",{parentName:"li"},"MetadataAuditEvent_v4"),": Metadata change log messages"),(0,a.kt)("li",{parentName:"ol"},"(Deprecated) ",(0,a.kt)("strong",{parentName:"li"},"FailedMetadataChangeEvent_v4"),": Failed to process #1 event")),(0,a.kt)("p",null,"The first five are the most important, and are explained in more depth in ",(0,a.kt)("a",{parentName:"p",href:"/docs/advanced/mcp-mcl"},"MCP/MCL"),". The final topics are\nthose which are deprecated but still used under certain circumstances. It is likely that in the future they will be completely\ndecommissioned. "),(0,a.kt)("p",null,"To create the topics, navigate to your ",(0,a.kt)("strong",{parentName:"p"},"Cluster"),' and click "Create Topic". Feel free to tweak the default topic configurations to\nmatch your preferences.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CreateTopic",src:n(73134).Z,width:"2880",height:"1642"})),(0,a.kt)("h2",{id:"step-2-configure-datahub-container-to-use-confluent-cloud-topics"},"Step 2: Configure DataHub Container to use Confluent Cloud Topics"),(0,a.kt)("h3",{id:"docker-compose"},"Docker Compose"),(0,a.kt)("p",null,"If you are deploying DataHub via docker compose, enabling connection to Confluent is a matter of a) creating topics in the Confluent Control Center and b) changing the default container environment variables."),(0,a.kt)("p",null,"First, configure GMS to connect to Confluent Cloud by changing ",(0,a.kt)("inlineCode",{parentName:"p"},"docker/gms/env/docker.env"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"KAFKA_BOOTSTRAP_SERVER=pkc-g4ml2.eu-west-2.aws.confluent.cloud:9092\nKAFKA_SCHEMAREGISTRY_URL=https://plrm-qwlpp.us-east-2.aws.confluent.cloud\n\n# Confluent Cloud Configs\nSPRING_KAFKA_PROPERTIES_SECURITY_PROTOCOL=SASL_SSL\nSPRING_KAFKA_PROPERTIES_SASL_JAAS_CONFIG=org.apache.kafka.common.security.plain.PlainLoginModule   required username='XFA45EL1QFUQP4PA' password='ltyf96EvR1YYutsjLB3ZYfrk+yfCXD8sQHCE3EMp57A2jNs4RR7J1bU9k6lM6rU';\nSPRING_KAFKA_PROPERTIES_SASL_MECHANISM=PLAIN\nSPRING_KAFKA_PROPERTIES_CLIENT_DNS_LOOKUP=use_all_dns_ips\nSPRING_KAFKA_PROPERTIES_BASIC_AUTH_CREDENTIALS_SOURCE=USER_INFO\nSPRING_KAFKA_PROPERTIES_BASIC_AUTH_USER_INFO=P2ETAN5QR2LCWL14:RTjqw7AfETDl0RZo/7R0123LhPYs2TGjFKmvMWUFnlJ3uKubFbB1Sfs7aOjjNi1m23\n")),(0,a.kt)("p",null,"Next, configure datahub-frontend to connect to Confluent Cloud by changing ",(0,a.kt)("inlineCode",{parentName:"p"},"docker/datahub-frontend/env/docker.env"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"KAFKA_BOOTSTRAP_SERVER=pkc-g4ml2.eu-west-2.aws.confluent.cloud:9092\n\n# Confluent Cloud Configs\nKAFKA_PROPERTIES_SECURITY_PROTOCOL=SASL_SSL\nKAFKA_PROPERTIES_SASL_JAAS_CONFIG=org.apache.kafka.common.security.plain.PlainLoginModule   required username='XFA45EL1QFUQP4PA' password='ltyf96EvR1YYutsjLB3ZYfrk+yfCXD8sQHCE3EMp57A2jNs4RR7J1bU9k6lM6rU';\nKAFKA_PROPERTIES_SASL_MECHANISM=PLAIN\nKAFKA_PROPERTIES_CLIENT_DNS_LOOKUP=use_all_dns_ips\nKAFKA_PROPERTIES_BASIC_AUTH_CREDENTIALS_SOURCE=USER_INFO\nKAFKA_PROPERTIES_BASIC_AUTH_USER_INFO=P2ETAN5QR2LCWL14:RTjqw7AfETDl0RZo/7R0123LhPYs2TGjFKmvMWUFnlJ3uKubFbB1Sfs7aOjjNi1m23\n")),(0,a.kt)("p",null,"Note that this step is only required if ",(0,a.kt)("inlineCode",{parentName:"p"},"DATAHUB_ANALYTICS_ENABLED")," environment variable is not explicitly set to false for the datahub-frontend\ncontainer. "),(0,a.kt)("p",null,"If you're deploying with Docker Compose, you do not need to deploy the Zookeeper, Kafka Broker, or Schema Registry containers that ship by default."),(0,a.kt)("h4",{id:"datahub-actions"},"DataHub Actions"),(0,a.kt)("p",null,"Configuring Confluent Cloud for DataHub Actions requires some additional edits to your ",(0,a.kt)("inlineCode",{parentName:"p"},"executor.yaml"),". Under the Kafka\nsource connection config you will need to add the Python style client connection information:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"    connection:\n        bootstrap: ${KAFKA_BOOTSTRAP_SERVER:-localhost:9092}\n        schema_registry_url: ${SCHEMA_REGISTRY_URL:-http://localhost:8081}\n        consumer_config:\n          security.protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL:-PLAINTEXT}\n          sasl.mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM:-PLAIN}\n          sasl.username: ${KAFKA_PROPERTIES_SASL_USERNAME}\n          sasl.password: ${KAFKA_PROPERTIES_SASL_PASSWORD}\n        schema_registry_config:\n          basic.auth.user.info: ${KAFKA_PROPERTIES_BASIC_AUTH_USER_INFO}\n")),(0,a.kt)("p",null,"Specifically ",(0,a.kt)("inlineCode",{parentName:"p"},"sasl.username")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"sasl.password")," are the differences from the base ",(0,a.kt)("inlineCode",{parentName:"p"},"executor.yaml")," example file."),(0,a.kt)("p",null,"Additionally, you will need to set up environment variables for ",(0,a.kt)("inlineCode",{parentName:"p"},"KAFKA_PROPERTIES_SASL_USERNAME")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"KAFKA_PROPERTIES_SASL_PASSWORD"),"\nwhich will use the same username and API Key you generated for the JAAS config."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/acryldata/datahub-actions/blob/main/docker/README.md#overwriting-a-system-action-config"},"Overwriting a System Action Config")," for detailed reflection procedures."),(0,a.kt)("p",null,"Next, configure datahub-actions to connect to Confluent Cloud by changing ",(0,a.kt)("inlineCode",{parentName:"p"},"docker/datahub-actions/env/docker.env"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"KAFKA_BOOTSTRAP_SERVER=pkc-g4ml2.eu-west-2.aws.confluent.cloud:9092\nSCHEMA_REGISTRY_URL=https://plrm-qwlpp.us-east-2.aws.confluent.cloud\n\n# Confluent Cloud Configs\nKAFKA_PROPERTIES_SECURITY_PROTOCOL=SASL_SSL\nKAFKA_PROPERTIES_SASL_USERNAME=XFA45EL1QFUQP4PA\nKAFKA_PROPERTIES_SASL_PASSWORD=ltyf96EvR1YYutsjLB3ZYfrk+yfCXD8sQHCE3EMp57A2jNs4RR7J1bU9k6lM6rU\nKAFKA_PROPERTIES_SASL_MECHANISM=PLAIN\nKAFKA_PROPERTIES_CLIENT_DNS_LOOKUP=use_all_dns_ips\nKAFKA_PROPERTIES_BASIC_AUTH_CREDENTIALS_SOURCE=USER_INFO\nKAFKA_PROPERTIES_BASIC_AUTH_USER_INFO=P2ETAN5QR2LCWL14:RTjqw7AfETDl0RZo/7R0123LhPYs2TGjFKmvMWUFnlJ3uKubFbB1Sfs7aOjjNi1m23\n")),(0,a.kt)("h3",{id:"helm"},"Helm"),(0,a.kt)("p",null,"If you're deploying on K8s using Helm, you can simply change the ",(0,a.kt)("strong",{parentName:"p"},"datahub-helm")," ",(0,a.kt)("inlineCode",{parentName:"p"},"values.yml")," to point to Confluent Cloud and disable some default containers:"),(0,a.kt)("p",null,"First, disable the ",(0,a.kt)("inlineCode",{parentName:"p"},"cp-schema-registry")," service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cp-schema-registry:\n  enabled: false \n")),(0,a.kt)("p",null,"Next, disable the ",(0,a.kt)("inlineCode",{parentName:"p"},"kafkaSetupJob")," service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kafkaSetupJob:\n    enabled: false\n")),(0,a.kt)("p",null,"Then, update the ",(0,a.kt)("inlineCode",{parentName:"p"},"kafka")," configurations to point to your Confluent Cloud broker and schema registry instance, along with the topics you've created in Step 1:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kafka:\n      bootstrap:\n        server: pkc-g4ml2.eu-west-2.aws.confluent.cloud:9092\n      schemaregistry:\n        url: https://plrm-qwlpp.us-east-2.aws.confluent.cloud\n")),(0,a.kt)("p",null,'Next, you\'ll want to create 2 new Kubernetes secrets, one for the JaaS configuration which contains the username and password for Confluent,\nand another for the user info used for connecting to the schema registry. You\'ll find the values for each within the Confluent Control Center. Specifically,\nselect "Clients" -> "Configure new Java Client". You should see a page like the following:'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Config",src:n(86186).Z,width:"1606",height:"754"})),(0,a.kt)("p",null,"You'll want to generate both a Kafka Cluster API Key & a Schema Registry key. Once you do so,you should see the config\nautomatically populate with your new secrets:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Config",src:n(8824).Z,width:"1613",height:"755"})),(0,a.kt)("p",null,"You'll need to copy the values of ",(0,a.kt)("inlineCode",{parentName:"p"},"sasl.jaas.config")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"basic.auth.user.info"),"\nfor the next step."),(0,a.kt)("p",null,"The next step is to create K8s secrets containing the config values you've just generated. Specifically, you can run the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl create secret generic confluent-secrets --from-literal=sasl_jaas_config="<your-sasl.jaas.config>"\nkubectl create secret generic confluent-secrets --from-literal=basic_auth_user_info="<your-basic.auth.user.info>"\n')),(0,a.kt)("p",null,"With your config values substituted as appropriate. For example, in our case we'd run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create secret generic confluent-secrets --from-literal=sasl_jaas_config=\"org.apache.kafka.common.security.plain.PlainLoginModule   required username='XFA45EL1QFUQP4PA' password='ltyf96EvR1YYutsjLB3ZYfrk+yfCXD8sQHCE3EMp57A2jNs4RR7J1bU9k6lM6rU';\"\nkubectl create secret generic confluent-secrets --from-literal=basic_auth_user_info=\"P2ETAN5QR2LCWL14:RTjqw7AfETDl0RZo/7R0123LhPYs2TGjFKmvMWUFnlJ3uKubFbB1Sfs7aOjjNi1m23\"\n")),(0,a.kt)("p",null,"Finally, we'll configure our containers to pick up the Confluent Kafka Configs by changing two config blocks in our ",(0,a.kt)("inlineCode",{parentName:"p"},"values.yaml")," file. You\nshould see these blocks commented at the bottom of the template. You'll want to uncomment them and set them to the following values: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"credentialsAndCertsSecrets:\n  name: confluent-secrets\n  secureEnv:\n    sasl.jaas.config: sasl_jaas_config\n    basic.auth.user.info: basic_auth_user_info\n\n\nspringKafkaConfigurationOverrides:\n      security.protocol: SASL_SSL\n      sasl.mechanism: PLAIN\n      client.dns.lookup: use_all_dns_ips\n      basic.auth.credentials.source: USER_INFO\n")),(0,a.kt)("p",null,"Then simply apply the updated ",(0,a.kt)("inlineCode",{parentName:"p"},"values.yaml")," to your K8s cluster via ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl apply"),". "),(0,a.kt)("h4",{id:"datahub-actions-1"},"DataHub Actions"),(0,a.kt)("p",null,"Configuring Confluent Cloud for DataHub Actions requires some additional edits to your ",(0,a.kt)("inlineCode",{parentName:"p"},"executor.yaml"),". Under the Kafka\nsource connection config you will need to add the Python style client connection information:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"    connection:\n        bootstrap: ${KAFKA_BOOTSTRAP_SERVER:-localhost:9092}\n        schema_registry_url: ${SCHEMA_REGISTRY_URL:-http://localhost:8081}\n        consumer_config:\n          security.protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL:-PLAINTEXT}\n          sasl.mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM:-PLAIN}\n          sasl.username: ${KAFKA_PROPERTIES_SASL_USERNAME}\n          sasl.password: ${KAFKA_PROPERTIES_SASL_PASSWORD}\n        schema_registry_config:\n          basic.auth.user.info: ${KAFKA_PROPERTIES_BASIC_AUTH_USER_INFO}\n")),(0,a.kt)("p",null,"Specifically ",(0,a.kt)("inlineCode",{parentName:"p"},"sasl.username")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"sasl.password")," are the differences from the base ",(0,a.kt)("inlineCode",{parentName:"p"},"executor.yaml")," example file."),(0,a.kt)("p",null,"Additionally, you will need to set up secrets for ",(0,a.kt)("inlineCode",{parentName:"p"},"KAFKA_PROPERTIES_SASL_USERNAME")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"KAFKA_PROPERTIES_SASL_PASSWORD"),"\nwhich will use the same username and API Key you generated for the JAAS config."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/acryldata/datahub-actions/blob/main/docker/README.md#overwriting-a-system-action-config"},"Overwriting a System Action Config")," for detailed reflection procedures."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"credentialsAndCertsSecrets:\n  name: confluent-secrets\n  secureEnv:\n    sasl.jaas.config: sasl_jaas_config\n    basic.auth.user.info: basic_auth_user_info\n    sasl.username: sasl_username\n    sasl.password: sasl_password\n")),(0,a.kt)("p",null,"The Actions pod will automatically pick these up in the correctly named environment variables when they are named this exact way."),(0,a.kt)("h2",{id:"contribution"},"Contribution"),(0,a.kt)("p",null,"Accepting contributions for a setup script compatible with Confluent Cloud!"),(0,a.kt)("p",null,"The kafka-setup-job container we ship with is only compatible with a distribution of Kafka wherein ZooKeeper\nis exposed and available. A version of the job using the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.confluent.io/confluent-cli/current/command-reference/kafka/topic/confluent_kafka_topic_create.html"},"Confluent CLI"),"\nwould be very useful for the broader community."))}p.isMDXComponent=!0},8824:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/confluent-cloud-config-2-1f81469c99516b3ee9187e2bf9db880f.png"},86186:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/confluent-cloud-config-29585cce96064f5bbdf67a5ebf7988cd.png"},73134:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/confluent-create-topic-a46faa0ebe570f8b7ab3f0bc403eee55.png"}}]);