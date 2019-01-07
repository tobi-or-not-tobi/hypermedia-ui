/**
 * Simple Contact Group API
 * This is a sample API that can be used to kickstart SAP Commerce or Microservice API develoment. More info can be found on [SAP Wiki](https://wiki.hybris.com/display/prodandtech/Hypermedia+Milestone+%233+-+Integrating+through+the+stack)
 *
 * OpenAPI spec version: 1.2.0
 * Contact: frank.grupe@sap.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */ import { Contact } from './contact';
import { HyLink } from './hyLink';
import { HyLinks } from './hyLinks';

export interface HyContact extends HyLinks {
  contact?: Contact;
}
