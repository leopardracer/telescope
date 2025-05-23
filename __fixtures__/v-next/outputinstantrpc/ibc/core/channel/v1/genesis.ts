import { IdentifiedChannel, IdentifiedChannelSDKType, PacketState, PacketStateSDKType } from "./channel";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "ibc.core.channel.v1";
/** GenesisState defines the ibc channel submodule's genesis state. */
export interface GenesisState {
  channels: IdentifiedChannel[];
  acknowledgements: PacketState[];
  commitments: PacketState[];
  receipts: PacketState[];
  sendSequences: PacketSequence[];
  recvSequences: PacketSequence[];
  ackSequences: PacketSequence[];
  /** the sequence for the next generated channel identifier */
  nextChannelSequence: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/ibc.core.channel.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the ibc channel submodule's genesis state. */
export interface GenesisStateSDKType {
  channels: IdentifiedChannelSDKType[];
  acknowledgements: PacketStateSDKType[];
  commitments: PacketStateSDKType[];
  receipts: PacketStateSDKType[];
  send_sequences: PacketSequenceSDKType[];
  recv_sequences: PacketSequenceSDKType[];
  ack_sequences: PacketSequenceSDKType[];
  next_channel_sequence: bigint;
}
/**
 * PacketSequence defines the genesis type necessary to retrieve and store
 * next send and receive sequences.
 */
export interface PacketSequence {
  portId: string;
  channelId: string;
  sequence: bigint;
}
export interface PacketSequenceProtoMsg {
  typeUrl: "/ibc.core.channel.v1.PacketSequence";
  value: Uint8Array;
}
/**
 * PacketSequence defines the genesis type necessary to retrieve and store
 * next send and receive sequences.
 */
export interface PacketSequenceSDKType {
  port_id: string;
  channel_id: string;
  sequence: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    channels: [],
    acknowledgements: [],
    commitments: [],
    receipts: [],
    sendSequences: [],
    recvSequences: [],
    ackSequences: [],
    nextChannelSequence: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/ibc.core.channel.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.channels) {
      IdentifiedChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.acknowledgements) {
      PacketState.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.commitments) {
      PacketState.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.receipts) {
      PacketState.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.sendSequences) {
      PacketSequence.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.recvSequences) {
      PacketSequence.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.ackSequences) {
      PacketSequence.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.nextChannelSequence !== undefined) {
      writer.uint32(64).uint64(message.nextChannelSequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channels.push(IdentifiedChannel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.acknowledgements.push(PacketState.decode(reader, reader.uint32()));
          break;
        case 3:
          message.commitments.push(PacketState.decode(reader, reader.uint32()));
          break;
        case 4:
          message.receipts.push(PacketState.decode(reader, reader.uint32()));
          break;
        case 5:
          message.sendSequences.push(PacketSequence.decode(reader, reader.uint32()));
          break;
        case 6:
          message.recvSequences.push(PacketSequence.decode(reader, reader.uint32()));
          break;
        case 7:
          message.ackSequences.push(PacketSequence.decode(reader, reader.uint32()));
          break;
        case 8:
          message.nextChannelSequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (Array.isArray(object?.channels)) obj.channels = object.channels.map((e: any) => IdentifiedChannel.fromJSON(e));
    if (Array.isArray(object?.acknowledgements)) obj.acknowledgements = object.acknowledgements.map((e: any) => PacketState.fromJSON(e));
    if (Array.isArray(object?.commitments)) obj.commitments = object.commitments.map((e: any) => PacketState.fromJSON(e));
    if (Array.isArray(object?.receipts)) obj.receipts = object.receipts.map((e: any) => PacketState.fromJSON(e));
    if (Array.isArray(object?.sendSequences)) obj.sendSequences = object.sendSequences.map((e: any) => PacketSequence.fromJSON(e));
    if (Array.isArray(object?.recvSequences)) obj.recvSequences = object.recvSequences.map((e: any) => PacketSequence.fromJSON(e));
    if (Array.isArray(object?.ackSequences)) obj.ackSequences = object.ackSequences.map((e: any) => PacketSequence.fromJSON(e));
    if (isSet(object.nextChannelSequence)) obj.nextChannelSequence = BigInt(object.nextChannelSequence.toString());
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    if (message.channels) {
      obj.channels = message.channels.map(e => e ? IdentifiedChannel.toJSON(e) : undefined);
    } else {
      obj.channels = [];
    }
    if (message.acknowledgements) {
      obj.acknowledgements = message.acknowledgements.map(e => e ? PacketState.toJSON(e) : undefined);
    } else {
      obj.acknowledgements = [];
    }
    if (message.commitments) {
      obj.commitments = message.commitments.map(e => e ? PacketState.toJSON(e) : undefined);
    } else {
      obj.commitments = [];
    }
    if (message.receipts) {
      obj.receipts = message.receipts.map(e => e ? PacketState.toJSON(e) : undefined);
    } else {
      obj.receipts = [];
    }
    if (message.sendSequences) {
      obj.sendSequences = message.sendSequences.map(e => e ? PacketSequence.toJSON(e) : undefined);
    } else {
      obj.sendSequences = [];
    }
    if (message.recvSequences) {
      obj.recvSequences = message.recvSequences.map(e => e ? PacketSequence.toJSON(e) : undefined);
    } else {
      obj.recvSequences = [];
    }
    if (message.ackSequences) {
      obj.ackSequences = message.ackSequences.map(e => e ? PacketSequence.toJSON(e) : undefined);
    } else {
      obj.ackSequences = [];
    }
    message.nextChannelSequence !== undefined && (obj.nextChannelSequence = (message.nextChannelSequence || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.channels = object.channels?.map(e => IdentifiedChannel.fromPartial(e)) || [];
    message.acknowledgements = object.acknowledgements?.map(e => PacketState.fromPartial(e)) || [];
    message.commitments = object.commitments?.map(e => PacketState.fromPartial(e)) || [];
    message.receipts = object.receipts?.map(e => PacketState.fromPartial(e)) || [];
    message.sendSequences = object.sendSequences?.map(e => PacketSequence.fromPartial(e)) || [];
    message.recvSequences = object.recvSequences?.map(e => PacketSequence.fromPartial(e)) || [];
    message.ackSequences = object.ackSequences?.map(e => PacketSequence.fromPartial(e)) || [];
    if (object.nextChannelSequence !== undefined && object.nextChannelSequence !== null) {
      message.nextChannelSequence = BigInt(object.nextChannelSequence.toString());
    }
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      channels: Array.isArray(object?.channels) ? object.channels.map((e: any) => IdentifiedChannel.fromSDK(e)) : [],
      acknowledgements: Array.isArray(object?.acknowledgements) ? object.acknowledgements.map((e: any) => PacketState.fromSDK(e)) : [],
      commitments: Array.isArray(object?.commitments) ? object.commitments.map((e: any) => PacketState.fromSDK(e)) : [],
      receipts: Array.isArray(object?.receipts) ? object.receipts.map((e: any) => PacketState.fromSDK(e)) : [],
      sendSequences: Array.isArray(object?.send_sequences) ? object.send_sequences.map((e: any) => PacketSequence.fromSDK(e)) : [],
      recvSequences: Array.isArray(object?.recv_sequences) ? object.recv_sequences.map((e: any) => PacketSequence.fromSDK(e)) : [],
      ackSequences: Array.isArray(object?.ack_sequences) ? object.ack_sequences.map((e: any) => PacketSequence.fromSDK(e)) : [],
      nextChannelSequence: object?.next_channel_sequence
    };
  },
  fromSDKJSON(object: any): GenesisStateSDKType {
    return {
      channels: Array.isArray(object?.channels) ? object.channels.map((e: any) => IdentifiedChannel.fromSDKJSON(e)) : [],
      acknowledgements: Array.isArray(object?.acknowledgements) ? object.acknowledgements.map((e: any) => PacketState.fromSDKJSON(e)) : [],
      commitments: Array.isArray(object?.commitments) ? object.commitments.map((e: any) => PacketState.fromSDKJSON(e)) : [],
      receipts: Array.isArray(object?.receipts) ? object.receipts.map((e: any) => PacketState.fromSDKJSON(e)) : [],
      send_sequences: Array.isArray(object?.send_sequences) ? object.send_sequences.map((e: any) => PacketSequence.fromSDKJSON(e)) : [],
      recv_sequences: Array.isArray(object?.recv_sequences) ? object.recv_sequences.map((e: any) => PacketSequence.fromSDKJSON(e)) : [],
      ack_sequences: Array.isArray(object?.ack_sequences) ? object.ack_sequences.map((e: any) => PacketSequence.fromSDKJSON(e)) : [],
      next_channel_sequence: isSet(object.next_channel_sequence) ? BigInt(object.next_channel_sequence.toString()) : BigInt(0)
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    if (message.channels) {
      obj.channels = message.channels.map(e => e ? IdentifiedChannel.toSDK(e) : undefined);
    } else {
      obj.channels = [];
    }
    if (message.acknowledgements) {
      obj.acknowledgements = message.acknowledgements.map(e => e ? PacketState.toSDK(e) : undefined);
    } else {
      obj.acknowledgements = [];
    }
    if (message.commitments) {
      obj.commitments = message.commitments.map(e => e ? PacketState.toSDK(e) : undefined);
    } else {
      obj.commitments = [];
    }
    if (message.receipts) {
      obj.receipts = message.receipts.map(e => e ? PacketState.toSDK(e) : undefined);
    } else {
      obj.receipts = [];
    }
    if (message.sendSequences) {
      obj.send_sequences = message.sendSequences.map(e => e ? PacketSequence.toSDK(e) : undefined);
    } else {
      obj.send_sequences = [];
    }
    if (message.recvSequences) {
      obj.recv_sequences = message.recvSequences.map(e => e ? PacketSequence.toSDK(e) : undefined);
    } else {
      obj.recv_sequences = [];
    }
    if (message.ackSequences) {
      obj.ack_sequences = message.ackSequences.map(e => e ? PacketSequence.toSDK(e) : undefined);
    } else {
      obj.ack_sequences = [];
    }
    obj.next_channel_sequence = message.nextChannelSequence;
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.channels = object.channels?.map(e => IdentifiedChannel.fromAmino(e)) || [];
    message.acknowledgements = object.acknowledgements?.map(e => PacketState.fromAmino(e)) || [];
    message.commitments = object.commitments?.map(e => PacketState.fromAmino(e)) || [];
    message.receipts = object.receipts?.map(e => PacketState.fromAmino(e)) || [];
    message.sendSequences = object.send_sequences?.map(e => PacketSequence.fromAmino(e)) || [];
    message.recvSequences = object.recv_sequences?.map(e => PacketSequence.fromAmino(e)) || [];
    message.ackSequences = object.ack_sequences?.map(e => PacketSequence.fromAmino(e)) || [];
    if (object.next_channel_sequence !== undefined && object.next_channel_sequence !== null) {
      message.nextChannelSequence = BigInt(object.next_channel_sequence);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.channels) {
      obj.channels = message.channels.map(e => e ? IdentifiedChannel.toAmino(e) : undefined);
    } else {
      obj.channels = message.channels;
    }
    if (message.acknowledgements) {
      obj.acknowledgements = message.acknowledgements.map(e => e ? PacketState.toAmino(e) : undefined);
    } else {
      obj.acknowledgements = message.acknowledgements;
    }
    if (message.commitments) {
      obj.commitments = message.commitments.map(e => e ? PacketState.toAmino(e) : undefined);
    } else {
      obj.commitments = message.commitments;
    }
    if (message.receipts) {
      obj.receipts = message.receipts.map(e => e ? PacketState.toAmino(e) : undefined);
    } else {
      obj.receipts = message.receipts;
    }
    if (message.sendSequences) {
      obj.send_sequences = message.sendSequences.map(e => e ? PacketSequence.toAmino(e) : undefined);
    } else {
      obj.send_sequences = message.sendSequences;
    }
    if (message.recvSequences) {
      obj.recv_sequences = message.recvSequences.map(e => e ? PacketSequence.toAmino(e) : undefined);
    } else {
      obj.recv_sequences = message.recvSequences;
    }
    if (message.ackSequences) {
      obj.ack_sequences = message.ackSequences.map(e => e ? PacketSequence.toAmino(e) : undefined);
    } else {
      obj.ack_sequences = message.ackSequences;
    }
    obj.next_channel_sequence = message.nextChannelSequence !== BigInt(0) ? message.nextChannelSequence?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBasePacketSequence(): PacketSequence {
  return {
    portId: "",
    channelId: "",
    sequence: BigInt(0)
  };
}
export const PacketSequence = {
  typeUrl: "/ibc.core.channel.v1.PacketSequence",
  encode(message: PacketSequence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== undefined) {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== undefined) {
      writer.uint32(18).string(message.channelId);
    }
    if (message.sequence !== undefined) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PacketSequence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketSequence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PacketSequence {
    const obj = createBasePacketSequence();
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.sequence)) obj.sequence = BigInt(object.sequence.toString());
    return obj;
  },
  toJSON(message: PacketSequence): JsonSafe<PacketSequence> {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<PacketSequence>): PacketSequence {
    const message = createBasePacketSequence();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence.toString());
    }
    return message;
  },
  fromSDK(object: PacketSequenceSDKType): PacketSequence {
    return {
      portId: object?.port_id,
      channelId: object?.channel_id,
      sequence: object?.sequence
    };
  },
  fromSDKJSON(object: any): PacketSequenceSDKType {
    return {
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0)
    };
  },
  toSDK(message: PacketSequence): PacketSequenceSDKType {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.sequence = message.sequence;
    return obj;
  },
  fromAmino(object: PacketSequenceAmino): PacketSequence {
    const message = createBasePacketSequence();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message: PacketSequence): PacketSequenceAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PacketSequenceAminoMsg): PacketSequence {
    return PacketSequence.fromAmino(object.value);
  },
  toAminoMsg(message: PacketSequence): PacketSequenceAminoMsg {
    return {
      type: "cosmos-sdk/PacketSequence",
      value: PacketSequence.toAmino(message)
    };
  },
  fromProtoMsg(message: PacketSequenceProtoMsg): PacketSequence {
    return PacketSequence.decode(message.value);
  },
  toProto(message: PacketSequence): Uint8Array {
    return PacketSequence.encode(message).finish();
  },
  toProtoMsg(message: PacketSequence): PacketSequenceProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.PacketSequence",
      value: PacketSequence.encode(message).finish()
    };
  }
};