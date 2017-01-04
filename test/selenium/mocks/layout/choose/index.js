/**
* (C) Copyright IBM Corp. 2017. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
* in compliance with the License. You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software distributed under the License
* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
* or implied. See the License for the specific language governing permissions and limitations under
* the License.
*/

var responses = {
  getOneOfLayout: {
    "bot_id": "20b35cea-062e-45ef-92be-4fe351d64834",
    "dialog_id": "55049ff6-2b44-4356-9f02-f76c08c694bd",
    "message": {
      "text": ["Which email address are you looking to change?"],
      "context": {
        "conversation_id": "712d8d38-7ae1-4021-bf4c-67cca7535fdf",
        "system": {
          "dialog_request_counter": 2.0,
          "dialog_turn_counter": 2.0,
          "dialog_stack": ["node_2_1470928876329"]
        },
        "email_input_counter": 0.0
      },
      "layout": {
        "name": "choose"
      },
      "inputvalidation": {
        "oneOf": ["Profile Notifications", "Account Notifications", "Security/Usage Notifications", "eBilling Notifications", "All Notifications"]
      },
      "intents": [{
        "confidence": 1.0,
        "intent": "Account_Management-Email_Change"
      }],
      "entities": [{
        "entity": "receiptType",
        "location": [7, 12],
        "value": "email"
      }],
      "nodePosition": "ROOT",
      "log_data": {
        "intents": [{
          "confidence": 1.0,
          "intent": "Account_Management-Email_Change"
        }],
        "entities": [{
          "entity": "receiptType",
          "location": [7, 12],
          "value": "email"
        }]
      }
    }
  },
  getSomeOfLayout: {
    "bot_id": "20b35cea-062e-45ef-92be-4fe351d64834",
    "dialog_id": "55049ff6-2b44-4356-9f02-f76c08c694bd",
    "message": {
      "text": ["Which email addresses are you looking to change?"],
      "context": {
        "conversation_id": "712d8d38-7ae1-4021-bf4c-67cca7535fdf",
        "system": {
          "dialog_request_counter": 2.0,
          "dialog_turn_counter": 2.0,
          "dialog_stack": ["node_2_1470928876329"]
        },
        "email_input_counter": 0.0
      },
      "layout": {
        "name": "choose"
      },
      "inputvalidation": {
        "someOf": ["Profile Notifications", "Account Notifications", "Security/Usage Notifications", "eBilling Notifications", "All Notifications"]
      },
      "intents": [{
        "confidence": 1.0,
        "intent": "Account_Management-Email_Change"
      }],
      "entities": [{
        "entity": "receiptType",
        "location": [7, 12],
        "value": "email"
      }],
      "nodePosition": "ROOT",
      "log_data": {
        "intents": [{
          "confidence": 1.0,
          "intent": "Account_Management-Email_Change"
        }],
        "entities": [{
          "entity": "receiptType",
          "location": [7, 12],
          "value": "email"
        }]
      }
    }
  }
};

module.exports = {
  responses: responses
};
