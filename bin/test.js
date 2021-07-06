#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const cdk = require("@aws-cdk/core");
const test_stack_1 = require("../lib/test-stack");
const app = new cdk.App();
new test_stack_1.MyPipelineStack(app, 'PipelineStack', {
    env: {
        account: '394979472778',
        region: 'us-east-1',
    }
});
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsdUNBQXFDO0FBQ3JDLHFDQUFxQztBQUNyQyxrREFBb0Q7QUFFcEQsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDMUIsSUFBSSw0QkFBZSxDQUFDLEdBQUcsRUFBRSxlQUFlLEVBQUU7SUFDeEMsR0FBRyxFQUFFO1FBQ0gsT0FBTyxFQUFFLGNBQWM7UUFDdkIsTUFBTSxFQUFFLFdBQVc7S0FDcEI7Q0FDRixDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiBub2RlXG5pbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgKiBhcyBjZGsgZnJvbSAnQGF3cy1jZGsvY29yZSc7XG5pbXBvcnQgeyBNeVBpcGVsaW5lU3RhY2sgfSBmcm9tICcuLi9saWIvdGVzdC1zdGFjayc7XG5cbmNvbnN0IGFwcCA9IG5ldyBjZGsuQXBwKCk7XG5uZXcgTXlQaXBlbGluZVN0YWNrKGFwcCwgJ1BpcGVsaW5lU3RhY2snLCB7XG4gIGVudjoge1xuICAgIGFjY291bnQ6ICczOTQ5Nzk0NzI3NzgnLFxuICAgIHJlZ2lvbjogJ3VzLWVhc3QtMScsXG4gIH1cbn0pO1xuXG5hcHAuc3ludGgoKTsiXX0=