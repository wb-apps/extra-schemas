// @link https://schemas.extra.com/json-schema/extra/curator/command/mark-promotion-as-pending/1-0-0.json#
import GdbotsNcrMarkNodeAsPendingV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/mark-node-as-pending/MarkNodeAsPendingV1Mixin';
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class MarkPromotionAsPendingV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:extra:curator:command:mark-promotion-as-pending:1-0-0', MarkPromotionAsPendingV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsNcrMarkNodeAsPendingV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxCommandV1Trait(MarkPromotionAsPendingV1);
MessageResolver.register('extra:curator:command:mark-promotion-as-pending', MarkPromotionAsPendingV1);
Object.freeze(MarkPromotionAsPendingV1);
Object.freeze(MarkPromotionAsPendingV1.prototype);