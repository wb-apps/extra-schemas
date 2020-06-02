// @link https://schemas.extratv.com/json-schema/extra/curator/command/publish-teaser/1-0-0.json#
import GdbotsNcrPublishNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/publish-node/PublishNodeV1Mixin';
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class PublishTeaserV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:extra:curator:command:publish-teaser:1-0-0', PublishTeaserV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsNcrPublishNodeV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxCommandV1Trait(PublishTeaserV1);
MessageResolver.register('extra:curator:command:publish-teaser', PublishTeaserV1);
Object.freeze(PublishTeaserV1);
Object.freeze(PublishTeaserV1.prototype);
