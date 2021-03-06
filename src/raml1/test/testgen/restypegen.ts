/// <reference path="../../../../typings/main.d.ts" />

// import _=require("underscore")
// import fs=require("fs")
// import abnf=require("abnf")
//
// import def=require("../../definitionSystem")
// import hl=require("../../highLevelAST")
// import high = require("../../highLevelImpl")
// import textutil = require('../../../util/textutil')
// import util = require("../../test/test-utils")
// import parser=require("../../artifacts/raml10parser")
// import jsyaml=require("../../jsyaml/jsyaml2lowLevel")
// import bnfgen = require('./bnfgen')
// import exgen = require('./exgen')
// import typeExpression=require("../../ast.core/typeExpressionParser")
// import gu = require('./gen-util')
//
// export class ResourceTypeGenerator {
//
//     typeman: gu.TypeManager;
//
//     constructor(private api: parser.Api) {
//         this.typeman = new gu.TypeManager(api);
//         //this.typeman.listApiTypes('On Resources')
//     }
//
//     method(res: parser.ResourceImpl, name: string) {
//         var method = new parser.MethodImpl(name);
//         var body = new parser.TypeDeclarationImpl('application/json');
//         var exp = gu.generateResTypeExpression(this.typeman.typenames());
//
//         body.setType(exp);
//         // console.log('expression: ' + exp);
//         var gen = new exgen.ExampleGenerator(this.typeman);
//         var example = gen.generateTypeExpression(exp);
//         body.setExample(JSON.stringify(example, null,2));
//
//         method.add(body);
//         res.add(method);
//     }
//
//     generate(name: string) {
//         var resource = new parser.ResourceImpl(name);
//         this.method(resource, 'post');
//         (<parser.ApiImpl>this.api).addToProp(resource, 'resourceTypes');
//     }
//
//     text(): string {
//         return this.api.highLevel().lowLevel().unit().contents();
//     }
//
// }
