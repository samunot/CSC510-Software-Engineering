# HW5

## Ansible

playbook.yaml has the setup and all the tasks, to run the playbook use the command below on the ansible server. Inventory file should have the key and ipaddress of your other node

> ansible-playbook playbook.yaml -i inventory

## Screencast link

[![Screencast](http://img.youtube.com/vi/8dSqQmXiqfs/0.jpg)](http://www.youtube.com/watch?v=8dSqQmXiqfs)

## Concepts

### Why should developers use configuration management tools to manage their software programs? 

1. Faster provision of new servers. When a server is deployed, a tool can automate provisioning process for it. It is much quicker and efficient as it allows cumbersome tasks to be performed faster. Manually deploying a web server could take hours but configuration management tool will do it in minutes.

2. Fast recovery from critical events. When a server goes offline due to unknown circumstances, it might take several hours to get to the root of the problem. In such scenarios, a replacement server can get the services back online and inspection can be done on the affected server

3. No more snowflake servers. Manual system administration may become extremely difficult to know what is installed and what changes are made. Manual hotfixes, configuration tweaks, and software updates can turn servers into unique snowflakes which gets hard to manage and replicate. By using a configuration management tool, the entire procedure is documented.

4. Version control for the server environment. When server setup is translated into a set of provisioning scripts one has ability to  add version control tools, such as Git that can be used to keep track of changes made to the provisioning and to maintain separate branches for legacy versions of the scripts.

5. Replicated Environments. Configuration management makes it easy to replicate environments with the exact same software and configurations and also enables to effectively build a multistage ecosystem, with production, development, and testing servers. 

### What can go wrong?

1. Figuring out which system components to change when requirements change.

2. Re-doing an implementation because you implemented to meet requirements that had changed and you didn’t communicate that to all parties.

3. Losing productivity when you replace a component with a flawed new version and can’t quickly revert to a working state.

4. Replacing the wrong component because you couldn’t accurately determine which component needed replacing.

### Explain the difference bewteen continuous integration, continuous delivery, and continuous deployment, in your own words.

Continuous Integration (CI) is a software engineering practice in which developers integrate code into a shared repository several times in a short period of time in order to obtain faster feedback on the reliability of the code. CI enables automated build and testing so that teams can rapidly work on a single project together.

Continuous delivery (CD) is a software engineering practice in which teams develop, build, test, and release software in short cycles. It depends on automation at every stage so that cycles can be both quick and reliable.

Continuous Deployment is the process by which qualified changes in software code or architecture are deployed to production as soon as they are ready and without human intervention.

CI benefits developers most because it allows for code produced to be automatically tested and continuously integrated with other developers’ code, and with the existing codebase. The developer benefits from receiving continuous and immediate feedback regarding code and integration errors. As s/he fixes these errors, automated testing tools in this stage will report if the errors were successfully fixed and when the code is accepted. This continuous feedback loop dramatically increases a developer’s productivity.

Continuous Delivery benefits business users because as soon as code is successfully accepted in the CI stage and a logical function can be tested, it is released to users. They verify that the features meet their expectations and provide feedback to developers who then address the feedback in this stage. This feedback loop between users and developers is continuous and seamless. Whereas in traditional waterfall method, users could wait weeks/months to see the features for the first time, this approach can dramatically reduce the time to just hours/days.

Continuous Deployment seamlessly pushes code that has been successfully accepted in the CI/CD cycle into the production environment. This stage benefits all key stakeholders, from application investors who fund the development to external consumers and internal end-users as new features/application is available for immediate (external) commercial sale or internal use.

### References

1. https://www.digitalocean.com/community/tutorials/an-introduction-to-configuration-management
2. https://www.upguard.com/blog/5-configuration-management-boss
3. https://stackify.com/continuous-delivery-vs-continuous-deployment-vs-continuous-integration/
