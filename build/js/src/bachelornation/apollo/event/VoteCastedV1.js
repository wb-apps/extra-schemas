// @link https://schemas.extra.com/json-schema/extra/apollo/event/vote-casted/1-0-0.json#
import GdbotsAnalyticsTrackedMessageV1Mixin from '@gdbots/schemas/gdbots/analytics/mixin/tracked-message/TrackedMessageV1Mixin';
import GdbotsEnrichmentsIpToGeoV1Mixin from '@gdbots/schemas/gdbots/enrichments/mixin/ip-to-geo/IpToGeoV1Mixin';
import GdbotsEnrichmentsTimePartingV1Mixin from '@gdbots/schemas/gdbots/enrichments/mixin/time-parting/TimePartingV1Mixin';
import GdbotsEnrichmentsTimeSamplingV1Mixin from '@gdbots/schemas/gdbots/enrichments/mixin/time-sampling/TimeSamplingV1Mixin';
import GdbotsEnrichmentsUaParserV1Mixin from '@gdbots/schemas/gdbots/enrichments/mixin/ua-parser/UaParserV1Mixin';
import GdbotsEnrichmentsUtmV1Mixin from '@gdbots/schemas/gdbots/enrichments/mixin/utm/UtmV1Mixin';
import GdbotsPbjxEventV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Mixin';
import GdbotsPbjxEventV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiApolloVoteCastedV1Mixin from '@triniti/schemas/triniti/apollo/mixin/vote-casted/VoteCastedV1Mixin';

export default class VoteCastedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:extra:apollo:event:vote-casted:1-0-0', VoteCastedV1,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        TrinitiApolloVoteCastedV1Mixin.create(),
        GdbotsAnalyticsTrackedMessageV1Mixin.create(),
        GdbotsEnrichmentsIpToGeoV1Mixin.create(),
        GdbotsEnrichmentsTimePartingV1Mixin.create(),
        GdbotsEnrichmentsTimeSamplingV1Mixin.create(),
        GdbotsEnrichmentsUaParserV1Mixin.create(),
        GdbotsEnrichmentsUtmV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxEventV1Trait(VoteCastedV1);
MessageResolver.register('extra:apollo:event:vote-casted', VoteCastedV1);
Object.freeze(VoteCastedV1);
Object.freeze(VoteCastedV1.prototype);
