import { FieldMask, FieldMaskAmino, FieldMaskSDKType } from "../../protobuf/field_mask";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../protobuf/timestamp";
import { isSet, toTimestamp, fromTimestamp, DeepPartial } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "google.logging.v2";
/** Deprecated. This is unused. */
export enum LogSink_VersionFormat {
  /** VERSION_FORMAT_UNSPECIFIED - An unspecified format version that will default to V2. */
  VERSION_FORMAT_UNSPECIFIED = 0,
  /** V2 - `LogEntry` version 2 format. */
  V2 = 1,
  /** V1 - `LogEntry` version 1 format. */
  V1 = 2,
  UNRECOGNIZED = -1,
}
export const LogSink_VersionFormatSDKType = LogSink_VersionFormat;
export const LogSink_VersionFormatAmino = LogSink_VersionFormat;
export function logSink_VersionFormatFromJSON(object: any): LogSink_VersionFormat {
  switch (object) {
    case 0:
    case "VERSION_FORMAT_UNSPECIFIED":
      return LogSink_VersionFormat.VERSION_FORMAT_UNSPECIFIED;
    case 1:
    case "V2":
      return LogSink_VersionFormat.V2;
    case 2:
    case "V1":
      return LogSink_VersionFormat.V1;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LogSink_VersionFormat.UNRECOGNIZED;
  }
}
export function logSink_VersionFormatToJSON(object: LogSink_VersionFormat): string {
  switch (object) {
    case LogSink_VersionFormat.VERSION_FORMAT_UNSPECIFIED:
      return "VERSION_FORMAT_UNSPECIFIED";
    case LogSink_VersionFormat.V2:
      return "V2";
    case LogSink_VersionFormat.V1:
      return "V1";
    case LogSink_VersionFormat.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** LogBucket lifecycle states. */
export enum LifecycleState {
  /**
   * LIFECYCLE_STATE_UNSPECIFIED - Unspecified state. This is only used/useful for distinguishing unset
   * values.
   */
  LIFECYCLE_STATE_UNSPECIFIED = 0,
  /** ACTIVE - The normal and active state. */
  ACTIVE = 1,
  /**
   * DELETE_REQUESTED - The resource has been marked for deletion by the user. For some resources
   * (e.g. buckets), this can be reversed by an un-delete operation.
   */
  DELETE_REQUESTED = 2,
  UNRECOGNIZED = -1,
}
export const LifecycleStateSDKType = LifecycleState;
export const LifecycleStateAmino = LifecycleState;
export function lifecycleStateFromJSON(object: any): LifecycleState {
  switch (object) {
    case 0:
    case "LIFECYCLE_STATE_UNSPECIFIED":
      return LifecycleState.LIFECYCLE_STATE_UNSPECIFIED;
    case 1:
    case "ACTIVE":
      return LifecycleState.ACTIVE;
    case 2:
    case "DELETE_REQUESTED":
      return LifecycleState.DELETE_REQUESTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LifecycleState.UNRECOGNIZED;
  }
}
export function lifecycleStateToJSON(object: LifecycleState): string {
  switch (object) {
    case LifecycleState.LIFECYCLE_STATE_UNSPECIFIED:
      return "LIFECYCLE_STATE_UNSPECIFIED";
    case LifecycleState.ACTIVE:
      return "ACTIVE";
    case LifecycleState.DELETE_REQUESTED:
      return "DELETE_REQUESTED";
    case LifecycleState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * List of different operation states.
 * High level state of the operation. This is used to report the job's
 * current state to the user. Once a long running operation is created,
 * the current state of the operation can be queried even before the
 * operation is finished and the final result is available.
 */
export enum OperationState {
  /** OPERATION_STATE_UNSPECIFIED - Should not be used. */
  OPERATION_STATE_UNSPECIFIED = 0,
  /** OPERATION_STATE_SCHEDULED - The operation is scheduled. */
  OPERATION_STATE_SCHEDULED = 1,
  /** OPERATION_STATE_WAITING_FOR_PERMISSIONS - Waiting for necessary permissions. */
  OPERATION_STATE_WAITING_FOR_PERMISSIONS = 2,
  /** OPERATION_STATE_RUNNING - The operation is running. */
  OPERATION_STATE_RUNNING = 3,
  /** OPERATION_STATE_SUCCEEDED - The operation was completed successfully. */
  OPERATION_STATE_SUCCEEDED = 4,
  /** OPERATION_STATE_FAILED - The operation failed. */
  OPERATION_STATE_FAILED = 5,
  /** OPERATION_STATE_CANCELLED - The operation was cancelled by the user. */
  OPERATION_STATE_CANCELLED = 6,
  UNRECOGNIZED = -1,
}
export const OperationStateSDKType = OperationState;
export const OperationStateAmino = OperationState;
export function operationStateFromJSON(object: any): OperationState {
  switch (object) {
    case 0:
    case "OPERATION_STATE_UNSPECIFIED":
      return OperationState.OPERATION_STATE_UNSPECIFIED;
    case 1:
    case "OPERATION_STATE_SCHEDULED":
      return OperationState.OPERATION_STATE_SCHEDULED;
    case 2:
    case "OPERATION_STATE_WAITING_FOR_PERMISSIONS":
      return OperationState.OPERATION_STATE_WAITING_FOR_PERMISSIONS;
    case 3:
    case "OPERATION_STATE_RUNNING":
      return OperationState.OPERATION_STATE_RUNNING;
    case 4:
    case "OPERATION_STATE_SUCCEEDED":
      return OperationState.OPERATION_STATE_SUCCEEDED;
    case 5:
    case "OPERATION_STATE_FAILED":
      return OperationState.OPERATION_STATE_FAILED;
    case 6:
    case "OPERATION_STATE_CANCELLED":
      return OperationState.OPERATION_STATE_CANCELLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OperationState.UNRECOGNIZED;
  }
}
export function operationStateToJSON(object: OperationState): string {
  switch (object) {
    case OperationState.OPERATION_STATE_UNSPECIFIED:
      return "OPERATION_STATE_UNSPECIFIED";
    case OperationState.OPERATION_STATE_SCHEDULED:
      return "OPERATION_STATE_SCHEDULED";
    case OperationState.OPERATION_STATE_WAITING_FOR_PERMISSIONS:
      return "OPERATION_STATE_WAITING_FOR_PERMISSIONS";
    case OperationState.OPERATION_STATE_RUNNING:
      return "OPERATION_STATE_RUNNING";
    case OperationState.OPERATION_STATE_SUCCEEDED:
      return "OPERATION_STATE_SUCCEEDED";
    case OperationState.OPERATION_STATE_FAILED:
      return "OPERATION_STATE_FAILED";
    case OperationState.OPERATION_STATE_CANCELLED:
      return "OPERATION_STATE_CANCELLED";
    case OperationState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Describes a repository in which log entries are stored. */
export interface LogBucket {
  /**
   * Output only. The resource name of the bucket.
   * 
   * For example:
   * 
   *   `projects/my-project/locations/global/buckets/my-bucket`
   * 
   * For a list of supported locations, see [Supported
   * Regions](https://cloud.google.com/logging/docs/region-support)
   * 
   * For the location of `global` it is unspecified where log entries are
   * actually stored.
   * 
   * After a bucket has been created, the location cannot be changed.
   */
  name: string;
  /** Describes this bucket. */
  description: string;
  /**
   * Output only. The creation timestamp of the bucket. This is not set for any of the
   * default buckets.
   */
  createTime?: Date;
  /** Output only. The last update timestamp of the bucket. */
  updateTime?: Date;
  /**
   * Logs will be retained by default for this amount of time, after which they
   * will automatically be deleted. The minimum retention period is 1 day. If
   * this value is set to zero at bucket creation time, the default time of 30
   * days will be used.
   */
  retentionDays: number;
  /**
   * Whether the bucket is locked.
   * 
   * The retention period on a locked bucket cannot be changed. Locked buckets
   * may only be deleted if they are empty.
   */
  locked: boolean;
  /** Output only. The bucket lifecycle state. */
  lifecycleState: LifecycleState;
  /**
   * Log entry field paths that are denied access in this bucket.
   * 
   * The following fields and their children are eligible: `textPayload`,
   * `jsonPayload`, `protoPayload`, `httpRequest`, `labels`, `sourceLocation`.
   * 
   * Restricting a repeated field will restrict all values. Adding a parent will
   * block all child fields. (e.g. `foo.bar` will block `foo.bar.baz`)
   */
  restrictedFields: string[];
  /**
   * The CMEK settings of the log bucket. If present, new log entries written to
   * this log bucket are encrypted using the CMEK key provided in this
   * configuration. If a log bucket has CMEK settings, the CMEK settings cannot
   * be disabled later by updating the log bucket. Changing the KMS key is
   * allowed.
   */
  cmekSettings?: CmekSettings;
}
export interface LogBucketProtoMsg {
  typeUrl: "/google.logging.v2.LogBucket";
  value: Uint8Array;
}
/** Describes a repository in which log entries are stored. */
export interface LogBucketAmino {
  /**
   * Output only. The resource name of the bucket.
   * 
   * For example:
   * 
   *   `projects/my-project/locations/global/buckets/my-bucket`
   * 
   * For a list of supported locations, see [Supported
   * Regions](https://cloud.google.com/logging/docs/region-support)
   * 
   * For the location of `global` it is unspecified where log entries are
   * actually stored.
   * 
   * After a bucket has been created, the location cannot be changed.
   */
  name?: string;
  /** Describes this bucket. */
  description?: string;
  /**
   * Output only. The creation timestamp of the bucket. This is not set for any of the
   * default buckets.
   */
  create_time?: string;
  /** Output only. The last update timestamp of the bucket. */
  update_time?: string;
  /**
   * Logs will be retained by default for this amount of time, after which they
   * will automatically be deleted. The minimum retention period is 1 day. If
   * this value is set to zero at bucket creation time, the default time of 30
   * days will be used.
   */
  retention_days?: number;
  /**
   * Whether the bucket is locked.
   * 
   * The retention period on a locked bucket cannot be changed. Locked buckets
   * may only be deleted if they are empty.
   */
  locked?: boolean;
  /** Output only. The bucket lifecycle state. */
  lifecycle_state?: LifecycleState;
  /**
   * Log entry field paths that are denied access in this bucket.
   * 
   * The following fields and their children are eligible: `textPayload`,
   * `jsonPayload`, `protoPayload`, `httpRequest`, `labels`, `sourceLocation`.
   * 
   * Restricting a repeated field will restrict all values. Adding a parent will
   * block all child fields. (e.g. `foo.bar` will block `foo.bar.baz`)
   */
  restricted_fields?: string[];
  /**
   * The CMEK settings of the log bucket. If present, new log entries written to
   * this log bucket are encrypted using the CMEK key provided in this
   * configuration. If a log bucket has CMEK settings, the CMEK settings cannot
   * be disabled later by updating the log bucket. Changing the KMS key is
   * allowed.
   */
  cmek_settings?: CmekSettingsAmino;
}
export interface LogBucketAminoMsg {
  type: "/google.logging.v2.LogBucket";
  value: LogBucketAmino;
}
/** Describes a repository in which log entries are stored. */
export interface LogBucketSDKType {
  name: string;
  description: string;
  create_time?: Date;
  update_time?: Date;
  retention_days: number;
  locked: boolean;
  lifecycle_state: LifecycleState;
  restricted_fields: string[];
  cmek_settings?: CmekSettingsSDKType;
}
/** Describes a view over log entries in a bucket. */
export interface LogView {
  /**
   * The resource name of the view.
   * 
   * For example:
   * 
   *   `projects/my-project/locations/global/buckets/my-bucket/views/my-view`
   */
  name: string;
  /** Describes this view. */
  description: string;
  /** Output only. The creation timestamp of the view. */
  createTime?: Date;
  /** Output only. The last update timestamp of the view. */
  updateTime?: Date;
  /**
   * Filter that restricts which log entries in a bucket are visible in this
   * view.
   * 
   * Filters are restricted to be a logical AND of ==/!= of any of the
   * following:
   * 
   *   - originating project/folder/organization/billing account.
   *   - resource type
   *   - log id
   * 
   * For example:
   * 
   *   SOURCE("projects/myproject") AND resource.type = "gce_instance"
   *                                AND LOG_ID("stdout")
   */
  filter: string;
}
export interface LogViewProtoMsg {
  typeUrl: "/google.logging.v2.LogView";
  value: Uint8Array;
}
/** Describes a view over log entries in a bucket. */
export interface LogViewAmino {
  /**
   * The resource name of the view.
   * 
   * For example:
   * 
   *   `projects/my-project/locations/global/buckets/my-bucket/views/my-view`
   */
  name?: string;
  /** Describes this view. */
  description?: string;
  /** Output only. The creation timestamp of the view. */
  create_time?: string;
  /** Output only. The last update timestamp of the view. */
  update_time?: string;
  /**
   * Filter that restricts which log entries in a bucket are visible in this
   * view.
   * 
   * Filters are restricted to be a logical AND of ==/!= of any of the
   * following:
   * 
   *   - originating project/folder/organization/billing account.
   *   - resource type
   *   - log id
   * 
   * For example:
   * 
   *   SOURCE("projects/myproject") AND resource.type = "gce_instance"
   *                                AND LOG_ID("stdout")
   */
  filter?: string;
}
export interface LogViewAminoMsg {
  type: "/google.logging.v2.LogView";
  value: LogViewAmino;
}
/** Describes a view over log entries in a bucket. */
export interface LogViewSDKType {
  name: string;
  description: string;
  create_time?: Date;
  update_time?: Date;
  filter: string;
}
/**
 * Describes a sink used to export log entries to one of the following
 * destinations in any project: a Cloud Storage bucket, a BigQuery dataset, a
 * Pub/Sub topic or a Cloud Logging log bucket. A logs filter controls which log
 * entries are exported. The sink must be created within a project,
 * organization, billing account, or folder.
 */
export interface LogSink {
  /**
   * Required. The client-assigned sink identifier, unique within the project.
   * 
   * For example: `"my-syslog-errors-to-pubsub"`. Sink identifiers are limited
   * to 100 characters and can include only the following characters: upper and
   * lower-case alphanumeric characters, underscores, hyphens, and periods.
   * First character has to be alphanumeric.
   */
  name: string;
  /**
   * Required. The export destination:
   * 
   *     "storage.googleapis.com/[GCS_BUCKET]"
   *     "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]"
   *     "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]"
   * 
   * The sink's `writer_identity`, set when the sink is created, must have
   * permission to write to the destination or else the log entries are not
   * exported. For more information, see
   * [Exporting Logs with
   * Sinks](https://cloud.google.com/logging/docs/api/tasks/exporting-logs).
   */
  destination: string;
  /**
   * Optional. An [advanced logs
   * filter](https://cloud.google.com/logging/docs/view/advanced-queries). The
   * only exported log entries are those that are in the resource owning the
   * sink and that match the filter.
   * 
   * For example:
   * 
   *   `logName="projects/[PROJECT_ID]/logs/[LOG_ID]" AND severity>=ERROR`
   */
  filter: string;
  /**
   * Optional. A description of this sink.
   * 
   * The maximum length of the description is 8000 characters.
   */
  description: string;
  /**
   * Optional. If set to true, then this sink is disabled and it does not export any log
   * entries.
   */
  disabled: boolean;
  /**
   * Optional. Log entries that match any of these exclusion filters will not be exported.
   * 
   * If a log entry is matched by both `filter` and one of `exclusion_filters`
   * it will not be exported.
   */
  exclusions: LogExclusion[];
  /** Deprecated. This field is unused. */
  /** @deprecated */
  outputVersionFormat: LogSink_VersionFormat;
  /**
   * Output only. An IAM identity&mdash;a service account or group&mdash;under which Cloud
   * Logging writes the exported log entries to the sink's destination. This
   * field is set by
   * [sinks.create][google.logging.v2.ConfigServiceV2.CreateSink] and
   * [sinks.update][google.logging.v2.ConfigServiceV2.UpdateSink] based on the
   * value of `unique_writer_identity` in those methods.
   * 
   * Until you grant this identity write-access to the destination, log entry
   * exports from this sink will fail. For more information, see [Granting
   * Access for a
   * Resource](https://cloud.google.com/iam/docs/granting-roles-to-service-accounts#granting_access_to_a_service_account_for_a_resource).
   * Consult the destination service's documentation to determine the
   * appropriate IAM roles to assign to the identity.
   * 
   * Sinks that have a destination that is a log bucket in the same project as
   * the sink do not have a writer_identity and no additional permissions are
   * required.
   */
  writerIdentity: string;
  /**
   * Optional. This field applies only to sinks owned by organizations and folders. If the
   * field is false, the default, only the logs owned by the sink's parent
   * resource are available for export. If the field is true, then log entries
   * from all the projects, folders, and billing accounts contained in the
   * sink's parent resource are also available for export. Whether a particular
   * log entry from the children is exported depends on the sink's filter
   * expression.
   * 
   * For example, if this field is true, then the filter
   * `resource.type=gce_instance` would export all Compute Engine VM instance
   * log entries from all projects in the sink's parent.
   * 
   * To only export entries from certain child projects, filter on the project
   * part of the log name:
   * 
   *   logName:("projects/test-project1/" OR "projects/test-project2/") AND
   *   resource.type=gce_instance
   */
  includeChildren: boolean;
  /** Optional. Options that affect sinks exporting data to BigQuery. */
  bigqueryOptions?: BigQueryOptions;
  /**
   * Output only. The creation timestamp of the sink.
   * 
   * This field may not be present for older sinks.
   */
  createTime?: Date;
  /**
   * Output only. The last update timestamp of the sink.
   * 
   * This field may not be present for older sinks.
   */
  updateTime?: Date;
}
export interface LogSinkProtoMsg {
  typeUrl: "/google.logging.v2.LogSink";
  value: Uint8Array;
}
/**
 * Describes a sink used to export log entries to one of the following
 * destinations in any project: a Cloud Storage bucket, a BigQuery dataset, a
 * Pub/Sub topic or a Cloud Logging log bucket. A logs filter controls which log
 * entries are exported. The sink must be created within a project,
 * organization, billing account, or folder.
 */
export interface LogSinkAmino {
  /**
   * Required. The client-assigned sink identifier, unique within the project.
   * 
   * For example: `"my-syslog-errors-to-pubsub"`. Sink identifiers are limited
   * to 100 characters and can include only the following characters: upper and
   * lower-case alphanumeric characters, underscores, hyphens, and periods.
   * First character has to be alphanumeric.
   */
  name?: string;
  /**
   * Required. The export destination:
   * 
   *     "storage.googleapis.com/[GCS_BUCKET]"
   *     "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]"
   *     "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]"
   * 
   * The sink's `writer_identity`, set when the sink is created, must have
   * permission to write to the destination or else the log entries are not
   * exported. For more information, see
   * [Exporting Logs with
   * Sinks](https://cloud.google.com/logging/docs/api/tasks/exporting-logs).
   */
  destination?: string;
  /**
   * Optional. An [advanced logs
   * filter](https://cloud.google.com/logging/docs/view/advanced-queries). The
   * only exported log entries are those that are in the resource owning the
   * sink and that match the filter.
   * 
   * For example:
   * 
   *   `logName="projects/[PROJECT_ID]/logs/[LOG_ID]" AND severity>=ERROR`
   */
  filter?: string;
  /**
   * Optional. A description of this sink.
   * 
   * The maximum length of the description is 8000 characters.
   */
  description?: string;
  /**
   * Optional. If set to true, then this sink is disabled and it does not export any log
   * entries.
   */
  disabled?: boolean;
  /**
   * Optional. Log entries that match any of these exclusion filters will not be exported.
   * 
   * If a log entry is matched by both `filter` and one of `exclusion_filters`
   * it will not be exported.
   */
  exclusions?: LogExclusionAmino[];
  /** Deprecated. This field is unused. */
  /** @deprecated */
  output_version_format?: LogSink_VersionFormat;
  /**
   * Output only. An IAM identity&mdash;a service account or group&mdash;under which Cloud
   * Logging writes the exported log entries to the sink's destination. This
   * field is set by
   * [sinks.create][google.logging.v2.ConfigServiceV2.CreateSink] and
   * [sinks.update][google.logging.v2.ConfigServiceV2.UpdateSink] based on the
   * value of `unique_writer_identity` in those methods.
   * 
   * Until you grant this identity write-access to the destination, log entry
   * exports from this sink will fail. For more information, see [Granting
   * Access for a
   * Resource](https://cloud.google.com/iam/docs/granting-roles-to-service-accounts#granting_access_to_a_service_account_for_a_resource).
   * Consult the destination service's documentation to determine the
   * appropriate IAM roles to assign to the identity.
   * 
   * Sinks that have a destination that is a log bucket in the same project as
   * the sink do not have a writer_identity and no additional permissions are
   * required.
   */
  writer_identity?: string;
  /**
   * Optional. This field applies only to sinks owned by organizations and folders. If the
   * field is false, the default, only the logs owned by the sink's parent
   * resource are available for export. If the field is true, then log entries
   * from all the projects, folders, and billing accounts contained in the
   * sink's parent resource are also available for export. Whether a particular
   * log entry from the children is exported depends on the sink's filter
   * expression.
   * 
   * For example, if this field is true, then the filter
   * `resource.type=gce_instance` would export all Compute Engine VM instance
   * log entries from all projects in the sink's parent.
   * 
   * To only export entries from certain child projects, filter on the project
   * part of the log name:
   * 
   *   logName:("projects/test-project1/" OR "projects/test-project2/") AND
   *   resource.type=gce_instance
   */
  include_children?: boolean;
  /** Optional. Options that affect sinks exporting data to BigQuery. */
  bigquery_options?: BigQueryOptionsAmino;
  /**
   * Output only. The creation timestamp of the sink.
   * 
   * This field may not be present for older sinks.
   */
  create_time?: string;
  /**
   * Output only. The last update timestamp of the sink.
   * 
   * This field may not be present for older sinks.
   */
  update_time?: string;
}
export interface LogSinkAminoMsg {
  type: "/google.logging.v2.LogSink";
  value: LogSinkAmino;
}
/**
 * Describes a sink used to export log entries to one of the following
 * destinations in any project: a Cloud Storage bucket, a BigQuery dataset, a
 * Pub/Sub topic or a Cloud Logging log bucket. A logs filter controls which log
 * entries are exported. The sink must be created within a project,
 * organization, billing account, or folder.
 */
export interface LogSinkSDKType {
  name: string;
  destination: string;
  filter: string;
  description: string;
  disabled: boolean;
  exclusions: LogExclusionSDKType[];
  /** @deprecated */
  output_version_format: LogSink_VersionFormat;
  writer_identity: string;
  include_children: boolean;
  bigquery_options?: BigQueryOptionsSDKType;
  create_time?: Date;
  update_time?: Date;
}
/** Options that change functionality of a sink exporting data to BigQuery. */
export interface BigQueryOptions {
  /**
   * Optional. Whether to use [BigQuery's partition
   * tables](https://cloud.google.com/bigquery/docs/partitioned-tables). By
   * default, Cloud Logging creates dated tables based on the log entries'
   * timestamps, e.g. syslog_20170523. With partitioned tables the date suffix
   * is no longer present and [special query
   * syntax](https://cloud.google.com/bigquery/docs/querying-partitioned-tables)
   * has to be used instead. In both cases, tables are sharded based on UTC
   * timezone.
   */
  usePartitionedTables: boolean;
  /**
   * Output only. True if new timestamp column based partitioning is in use, false if legacy
   * ingestion-time partitioning is in use.
   * 
   * All new sinks will have this field set true and will use timestamp column
   * based partitioning. If use_partitioned_tables is false, this value has no
   * meaning and will be false. Legacy sinks using partitioned tables will have
   * this field set to false.
   */
  usesTimestampColumnPartitioning: boolean;
}
export interface BigQueryOptionsProtoMsg {
  typeUrl: "/google.logging.v2.BigQueryOptions";
  value: Uint8Array;
}
/** Options that change functionality of a sink exporting data to BigQuery. */
export interface BigQueryOptionsAmino {
  /**
   * Optional. Whether to use [BigQuery's partition
   * tables](https://cloud.google.com/bigquery/docs/partitioned-tables). By
   * default, Cloud Logging creates dated tables based on the log entries'
   * timestamps, e.g. syslog_20170523. With partitioned tables the date suffix
   * is no longer present and [special query
   * syntax](https://cloud.google.com/bigquery/docs/querying-partitioned-tables)
   * has to be used instead. In both cases, tables are sharded based on UTC
   * timezone.
   */
  use_partitioned_tables?: boolean;
  /**
   * Output only. True if new timestamp column based partitioning is in use, false if legacy
   * ingestion-time partitioning is in use.
   * 
   * All new sinks will have this field set true and will use timestamp column
   * based partitioning. If use_partitioned_tables is false, this value has no
   * meaning and will be false. Legacy sinks using partitioned tables will have
   * this field set to false.
   */
  uses_timestamp_column_partitioning?: boolean;
}
export interface BigQueryOptionsAminoMsg {
  type: "/google.logging.v2.BigQueryOptions";
  value: BigQueryOptionsAmino;
}
/** Options that change functionality of a sink exporting data to BigQuery. */
export interface BigQueryOptionsSDKType {
  use_partitioned_tables: boolean;
  uses_timestamp_column_partitioning: boolean;
}
/** The parameters to `ListBuckets`. */
export interface ListBucketsRequest {
  /**
   * Required. The parent resource whose buckets are to be listed:
   * 
   *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]"
   *     "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]"
   *     "folders/[FOLDER_ID]/locations/[LOCATION_ID]"
   * 
   * Note: The locations portion of the resource must be specified, but
   * supplying the character `-` in place of [LOCATION_ID] will return all
   * buckets.
   */
  parent: string;
  /**
   * Optional. If present, then retrieve the next batch of results from the preceding call
   * to this method. `pageToken` must be the value of `nextPageToken` from the
   * previous response. The values of other method parameters should be
   * identical to those in the previous call.
   */
  pageToken: string;
  /**
   * Optional. The maximum number of results to return from this request. Non-positive
   * values are ignored. The presence of `nextPageToken` in the response
   * indicates that more results might be available.
   */
  pageSize: number;
}
export interface ListBucketsRequestProtoMsg {
  typeUrl: "/google.logging.v2.ListBucketsRequest";
  value: Uint8Array;
}
/** The parameters to `ListBuckets`. */
export interface ListBucketsRequestAmino {
  /**
   * Required. The parent resource whose buckets are to be listed:
   * 
   *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]"
   *     "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]"
   *     "folders/[FOLDER_ID]/locations/[LOCATION_ID]"
   * 
   * Note: The locations portion of the resource must be specified, but
   * supplying the character `-` in place of [LOCATION_ID] will return all
   * buckets.
   */
  parent?: string;
  /**
   * Optional. If present, then retrieve the next batch of results from the preceding call
   * to this method. `pageToken` must be the value of `nextPageToken` from the
   * previous response. The values of other method parameters should be
   * identical to those in the previous call.
   */
  page_token?: string;
  /**
   * Optional. The maximum number of results to return from this request. Non-positive
   * values are ignored. The presence of `nextPageToken` in the response
   * indicates that more results might be available.
   */
  page_size?: number;
}
export interface ListBucketsRequestAminoMsg {
  type: "/google.logging.v2.ListBucketsRequest";
  value: ListBucketsRequestAmino;
}
/** The parameters to `ListBuckets`. */
export interface ListBucketsRequestSDKType {
  parent: string;
  page_token: string;
  page_size: number;
}
/** The response from ListBuckets. */
export interface ListBucketsResponse {
  /** A list of buckets. */
  buckets: LogBucket[];
  /**
   * If there might be more results than appear in this response, then
   * `nextPageToken` is included. To get the next set of results, call the same
   * method again using the value of `nextPageToken` as `pageToken`.
   */
  nextPageToken: string;
}
export interface ListBucketsResponseProtoMsg {
  typeUrl: "/google.logging.v2.ListBucketsResponse";
  value: Uint8Array;
}
/** The response from ListBuckets. */
export interface ListBucketsResponseAmino {
  /** A list of buckets. */
  buckets?: LogBucketAmino[];
  /**
   * If there might be more results than appear in this response, then
   * `nextPageToken` is included. To get the next set of results, call the same
   * method again using the value of `nextPageToken` as `pageToken`.
   */
  next_page_token?: string;
}
export interface ListBucketsResponseAminoMsg {
  type: "/google.logging.v2.ListBucketsResponse";
  value: ListBucketsResponseAmino;
}
/** The response from ListBuckets. */
export interface ListBucketsResponseSDKType {
  buckets: LogBucketSDKType[];
  next_page_token: string;
}
/** The parameters to `CreateBucket`. */
export interface CreateBucketRequest {
  /**
   * Required. The resource in which to create the log bucket:
   * 
   *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/locations/global"`
   */
  parent: string;
  /**
   * Required. A client-assigned identifier such as `"my-bucket"`. Identifiers are limited
   * to 100 characters and can include only letters, digits, underscores,
   * hyphens, and periods.
   */
  bucketId: string;
  /**
   * Required. The new bucket. The region specified in the new bucket must be compliant
   * with any Location Restriction Org Policy. The name field in the bucket is
   * ignored.
   */
  bucket?: LogBucket;
}
export interface CreateBucketRequestProtoMsg {
  typeUrl: "/google.logging.v2.CreateBucketRequest";
  value: Uint8Array;
}
/** The parameters to `CreateBucket`. */
export interface CreateBucketRequestAmino {
  /**
   * Required. The resource in which to create the log bucket:
   * 
   *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/locations/global"`
   */
  parent?: string;
  /**
   * Required. A client-assigned identifier such as `"my-bucket"`. Identifiers are limited
   * to 100 characters and can include only letters, digits, underscores,
   * hyphens, and periods.
   */
  bucket_id?: string;
  /**
   * Required. The new bucket. The region specified in the new bucket must be compliant
   * with any Location Restriction Org Policy. The name field in the bucket is
   * ignored.
   */
  bucket?: LogBucketAmino;
}
export interface CreateBucketRequestAminoMsg {
  type: "/google.logging.v2.CreateBucketRequest";
  value: CreateBucketRequestAmino;
}
/** The parameters to `CreateBucket`. */
export interface CreateBucketRequestSDKType {
  parent: string;
  bucket_id: string;
  bucket?: LogBucketSDKType;
}
/** The parameters to `UpdateBucket`. */
export interface UpdateBucketRequest {
  /**
   * Required. The full resource name of the bucket to update.
   * 
   *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *     "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *     "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/locations/global/buckets/my-bucket"`
   */
  name: string;
  /** Required. The updated bucket. */
  bucket?: LogBucket;
  /**
   * Required. Field mask that specifies the fields in `bucket` that need an update. A
   * bucket field will be overwritten if, and only if, it is in the update mask.
   * `name` and output only fields cannot be updated.
   * 
   * For a detailed `FieldMask` definition, see:
   * https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask
   * 
   * For example: `updateMask=retention_days`
   */
  updateMask?: FieldMask;
}
export interface UpdateBucketRequestProtoMsg {
  typeUrl: "/google.logging.v2.UpdateBucketRequest";
  value: Uint8Array;
}
/** The parameters to `UpdateBucket`. */
export interface UpdateBucketRequestAmino {
  /**
   * Required. The full resource name of the bucket to update.
   * 
   *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *     "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *     "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/locations/global/buckets/my-bucket"`
   */
  name?: string;
  /** Required. The updated bucket. */
  bucket?: LogBucketAmino;
  /**
   * Required. Field mask that specifies the fields in `bucket` that need an update. A
   * bucket field will be overwritten if, and only if, it is in the update mask.
   * `name` and output only fields cannot be updated.
   * 
   * For a detailed `FieldMask` definition, see:
   * https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask
   * 
   * For example: `updateMask=retention_days`
   */
  update_mask?: FieldMaskAmino;
}
export interface UpdateBucketRequestAminoMsg {
  type: "/google.logging.v2.UpdateBucketRequest";
  value: UpdateBucketRequestAmino;
}
/** The parameters to `UpdateBucket`. */
export interface UpdateBucketRequestSDKType {
  name: string;
  bucket?: LogBucketSDKType;
  update_mask?: FieldMaskSDKType;
}
/** The parameters to `GetBucket`. */
export interface GetBucketRequest {
  /**
   * Required. The resource name of the bucket:
   * 
   *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *     "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *     "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/locations/global/buckets/my-bucket"`
   */
  name: string;
}
export interface GetBucketRequestProtoMsg {
  typeUrl: "/google.logging.v2.GetBucketRequest";
  value: Uint8Array;
}
/** The parameters to `GetBucket`. */
export interface GetBucketRequestAmino {
  /**
   * Required. The resource name of the bucket:
   * 
   *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *     "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *     "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/locations/global/buckets/my-bucket"`
   */
  name?: string;
}
export interface GetBucketRequestAminoMsg {
  type: "/google.logging.v2.GetBucketRequest";
  value: GetBucketRequestAmino;
}
/** The parameters to `GetBucket`. */
export interface GetBucketRequestSDKType {
  name: string;
}
/** The parameters to `DeleteBucket`. */
export interface DeleteBucketRequest {
  /**
   * Required. The full resource name of the bucket to delete.
   * 
   *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *     "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *     "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/locations/global/buckets/my-bucket"`
   */
  name: string;
}
export interface DeleteBucketRequestProtoMsg {
  typeUrl: "/google.logging.v2.DeleteBucketRequest";
  value: Uint8Array;
}
/** The parameters to `DeleteBucket`. */
export interface DeleteBucketRequestAmino {
  /**
   * Required. The full resource name of the bucket to delete.
   * 
   *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *     "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *     "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/locations/global/buckets/my-bucket"`
   */
  name?: string;
}
export interface DeleteBucketRequestAminoMsg {
  type: "/google.logging.v2.DeleteBucketRequest";
  value: DeleteBucketRequestAmino;
}
/** The parameters to `DeleteBucket`. */
export interface DeleteBucketRequestSDKType {
  name: string;
}
/** The parameters to `UndeleteBucket`. */
export interface UndeleteBucketRequest {
  /**
   * Required. The full resource name of the bucket to undelete.
   * 
   *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *     "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *     "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/locations/global/buckets/my-bucket"`
   */
  name: string;
}
export interface UndeleteBucketRequestProtoMsg {
  typeUrl: "/google.logging.v2.UndeleteBucketRequest";
  value: Uint8Array;
}
/** The parameters to `UndeleteBucket`. */
export interface UndeleteBucketRequestAmino {
  /**
   * Required. The full resource name of the bucket to undelete.
   * 
   *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *     "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *     "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/locations/global/buckets/my-bucket"`
   */
  name?: string;
}
export interface UndeleteBucketRequestAminoMsg {
  type: "/google.logging.v2.UndeleteBucketRequest";
  value: UndeleteBucketRequestAmino;
}
/** The parameters to `UndeleteBucket`. */
export interface UndeleteBucketRequestSDKType {
  name: string;
}
/** The parameters to `ListViews`. */
export interface ListViewsRequest {
  /**
   * Required. The bucket whose views are to be listed:
   * 
   *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   */
  parent: string;
  /**
   * Optional. If present, then retrieve the next batch of results from the preceding call
   * to this method. `pageToken` must be the value of `nextPageToken` from the
   * previous response. The values of other method parameters should be
   * identical to those in the previous call.
   */
  pageToken: string;
  /**
   * Optional. The maximum number of results to return from this request.
   * 
   * Non-positive values are ignored. The presence of `nextPageToken` in the
   * response indicates that more results might be available.
   */
  pageSize: number;
}
export interface ListViewsRequestProtoMsg {
  typeUrl: "/google.logging.v2.ListViewsRequest";
  value: Uint8Array;
}
/** The parameters to `ListViews`. */
export interface ListViewsRequestAmino {
  /**
   * Required. The bucket whose views are to be listed:
   * 
   *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   */
  parent?: string;
  /**
   * Optional. If present, then retrieve the next batch of results from the preceding call
   * to this method. `pageToken` must be the value of `nextPageToken` from the
   * previous response. The values of other method parameters should be
   * identical to those in the previous call.
   */
  page_token?: string;
  /**
   * Optional. The maximum number of results to return from this request.
   * 
   * Non-positive values are ignored. The presence of `nextPageToken` in the
   * response indicates that more results might be available.
   */
  page_size?: number;
}
export interface ListViewsRequestAminoMsg {
  type: "/google.logging.v2.ListViewsRequest";
  value: ListViewsRequestAmino;
}
/** The parameters to `ListViews`. */
export interface ListViewsRequestSDKType {
  parent: string;
  page_token: string;
  page_size: number;
}
/** The response from ListViews. */
export interface ListViewsResponse {
  /** A list of views. */
  views: LogView[];
  /**
   * If there might be more results than appear in this response, then
   * `nextPageToken` is included. To get the next set of results, call the same
   * method again using the value of `nextPageToken` as `pageToken`.
   */
  nextPageToken: string;
}
export interface ListViewsResponseProtoMsg {
  typeUrl: "/google.logging.v2.ListViewsResponse";
  value: Uint8Array;
}
/** The response from ListViews. */
export interface ListViewsResponseAmino {
  /** A list of views. */
  views?: LogViewAmino[];
  /**
   * If there might be more results than appear in this response, then
   * `nextPageToken` is included. To get the next set of results, call the same
   * method again using the value of `nextPageToken` as `pageToken`.
   */
  next_page_token?: string;
}
export interface ListViewsResponseAminoMsg {
  type: "/google.logging.v2.ListViewsResponse";
  value: ListViewsResponseAmino;
}
/** The response from ListViews. */
export interface ListViewsResponseSDKType {
  views: LogViewSDKType[];
  next_page_token: string;
}
/** The parameters to `CreateView`. */
export interface CreateViewRequest {
  /**
   * Required. The bucket in which to create the view
   * 
   *     `"projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"`
   * 
   * For example:
   * 
   *   `"projects/my-project/locations/global/buckets/my-bucket"`
   */
  parent: string;
  /** Required. The id to use for this view. */
  viewId: string;
  /** Required. The new view. */
  view?: LogView;
}
export interface CreateViewRequestProtoMsg {
  typeUrl: "/google.logging.v2.CreateViewRequest";
  value: Uint8Array;
}
/** The parameters to `CreateView`. */
export interface CreateViewRequestAmino {
  /**
   * Required. The bucket in which to create the view
   * 
   *     `"projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"`
   * 
   * For example:
   * 
   *   `"projects/my-project/locations/global/buckets/my-bucket"`
   */
  parent?: string;
  /** Required. The id to use for this view. */
  view_id?: string;
  /** Required. The new view. */
  view?: LogViewAmino;
}
export interface CreateViewRequestAminoMsg {
  type: "/google.logging.v2.CreateViewRequest";
  value: CreateViewRequestAmino;
}
/** The parameters to `CreateView`. */
export interface CreateViewRequestSDKType {
  parent: string;
  view_id: string;
  view?: LogViewSDKType;
}
/** The parameters to `UpdateView`. */
export interface UpdateViewRequest {
  /**
   * Required. The full resource name of the view to update
   * 
   *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/locations/global/buckets/my-bucket/views/my-view"`
   */
  name: string;
  /** Required. The updated view. */
  view?: LogView;
  /**
   * Optional. Field mask that specifies the fields in `view` that need
   * an update. A field will be overwritten if, and only if, it is
   * in the update mask. `name` and output only fields cannot be updated.
   * 
   * For a detailed `FieldMask` definition, see
   * https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask
   * 
   * For example: `updateMask=filter`
   */
  updateMask?: FieldMask;
}
export interface UpdateViewRequestProtoMsg {
  typeUrl: "/google.logging.v2.UpdateViewRequest";
  value: Uint8Array;
}
/** The parameters to `UpdateView`. */
export interface UpdateViewRequestAmino {
  /**
   * Required. The full resource name of the view to update
   * 
   *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/locations/global/buckets/my-bucket/views/my-view"`
   */
  name?: string;
  /** Required. The updated view. */
  view?: LogViewAmino;
  /**
   * Optional. Field mask that specifies the fields in `view` that need
   * an update. A field will be overwritten if, and only if, it is
   * in the update mask. `name` and output only fields cannot be updated.
   * 
   * For a detailed `FieldMask` definition, see
   * https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask
   * 
   * For example: `updateMask=filter`
   */
  update_mask?: FieldMaskAmino;
}
export interface UpdateViewRequestAminoMsg {
  type: "/google.logging.v2.UpdateViewRequest";
  value: UpdateViewRequestAmino;
}
/** The parameters to `UpdateView`. */
export interface UpdateViewRequestSDKType {
  name: string;
  view?: LogViewSDKType;
  update_mask?: FieldMaskSDKType;
}
/** The parameters to `GetView`. */
export interface GetViewRequest {
  /**
   * Required. The resource name of the policy:
   * 
   *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/locations/global/buckets/my-bucket/views/my-view"`
   */
  name: string;
}
export interface GetViewRequestProtoMsg {
  typeUrl: "/google.logging.v2.GetViewRequest";
  value: Uint8Array;
}
/** The parameters to `GetView`. */
export interface GetViewRequestAmino {
  /**
   * Required. The resource name of the policy:
   * 
   *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/locations/global/buckets/my-bucket/views/my-view"`
   */
  name?: string;
}
export interface GetViewRequestAminoMsg {
  type: "/google.logging.v2.GetViewRequest";
  value: GetViewRequestAmino;
}
/** The parameters to `GetView`. */
export interface GetViewRequestSDKType {
  name: string;
}
/** The parameters to `DeleteView`. */
export interface DeleteViewRequest {
  /**
   * Required. The full resource name of the view to delete:
   * 
   *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]"
   * 
   * For example:
   * 
   *    `"projects/my-project/locations/global/buckets/my-bucket/views/my-view"`
   */
  name: string;
}
export interface DeleteViewRequestProtoMsg {
  typeUrl: "/google.logging.v2.DeleteViewRequest";
  value: Uint8Array;
}
/** The parameters to `DeleteView`. */
export interface DeleteViewRequestAmino {
  /**
   * Required. The full resource name of the view to delete:
   * 
   *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]"
   * 
   * For example:
   * 
   *    `"projects/my-project/locations/global/buckets/my-bucket/views/my-view"`
   */
  name?: string;
}
export interface DeleteViewRequestAminoMsg {
  type: "/google.logging.v2.DeleteViewRequest";
  value: DeleteViewRequestAmino;
}
/** The parameters to `DeleteView`. */
export interface DeleteViewRequestSDKType {
  name: string;
}
/** The parameters to `ListSinks`. */
export interface ListSinksRequest {
  /**
   * Required. The parent resource whose sinks are to be listed:
   * 
   *     "projects/[PROJECT_ID]"
   *     "organizations/[ORGANIZATION_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]"
   *     "folders/[FOLDER_ID]"
   */
  parent: string;
  /**
   * Optional. If present, then retrieve the next batch of results from the
   * preceding call to this method. `pageToken` must be the value of
   * `nextPageToken` from the previous response. The values of other method
   * parameters should be identical to those in the previous call.
   */
  pageToken: string;
  /**
   * Optional. The maximum number of results to return from this request.
   * Non-positive values are ignored. The presence of `nextPageToken` in the
   * response indicates that more results might be available.
   */
  pageSize: number;
}
export interface ListSinksRequestProtoMsg {
  typeUrl: "/google.logging.v2.ListSinksRequest";
  value: Uint8Array;
}
/** The parameters to `ListSinks`. */
export interface ListSinksRequestAmino {
  /**
   * Required. The parent resource whose sinks are to be listed:
   * 
   *     "projects/[PROJECT_ID]"
   *     "organizations/[ORGANIZATION_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]"
   *     "folders/[FOLDER_ID]"
   */
  parent?: string;
  /**
   * Optional. If present, then retrieve the next batch of results from the
   * preceding call to this method. `pageToken` must be the value of
   * `nextPageToken` from the previous response. The values of other method
   * parameters should be identical to those in the previous call.
   */
  page_token?: string;
  /**
   * Optional. The maximum number of results to return from this request.
   * Non-positive values are ignored. The presence of `nextPageToken` in the
   * response indicates that more results might be available.
   */
  page_size?: number;
}
export interface ListSinksRequestAminoMsg {
  type: "/google.logging.v2.ListSinksRequest";
  value: ListSinksRequestAmino;
}
/** The parameters to `ListSinks`. */
export interface ListSinksRequestSDKType {
  parent: string;
  page_token: string;
  page_size: number;
}
/** Result returned from `ListSinks`. */
export interface ListSinksResponse {
  /** A list of sinks. */
  sinks: LogSink[];
  /**
   * If there might be more results than appear in this response, then
   * `nextPageToken` is included. To get the next set of results, call the same
   * method again using the value of `nextPageToken` as `pageToken`.
   */
  nextPageToken: string;
}
export interface ListSinksResponseProtoMsg {
  typeUrl: "/google.logging.v2.ListSinksResponse";
  value: Uint8Array;
}
/** Result returned from `ListSinks`. */
export interface ListSinksResponseAmino {
  /** A list of sinks. */
  sinks?: LogSinkAmino[];
  /**
   * If there might be more results than appear in this response, then
   * `nextPageToken` is included. To get the next set of results, call the same
   * method again using the value of `nextPageToken` as `pageToken`.
   */
  next_page_token?: string;
}
export interface ListSinksResponseAminoMsg {
  type: "/google.logging.v2.ListSinksResponse";
  value: ListSinksResponseAmino;
}
/** Result returned from `ListSinks`. */
export interface ListSinksResponseSDKType {
  sinks: LogSinkSDKType[];
  next_page_token: string;
}
/** The parameters to `GetSink`. */
export interface GetSinkRequest {
  /**
   * Required. The resource name of the sink:
   * 
   *     "projects/[PROJECT_ID]/sinks/[SINK_ID]"
   *     "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
   *     "folders/[FOLDER_ID]/sinks/[SINK_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/sinks/my-sink"`
   */
  sinkName: string;
}
export interface GetSinkRequestProtoMsg {
  typeUrl: "/google.logging.v2.GetSinkRequest";
  value: Uint8Array;
}
/** The parameters to `GetSink`. */
export interface GetSinkRequestAmino {
  /**
   * Required. The resource name of the sink:
   * 
   *     "projects/[PROJECT_ID]/sinks/[SINK_ID]"
   *     "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
   *     "folders/[FOLDER_ID]/sinks/[SINK_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/sinks/my-sink"`
   */
  sink_name?: string;
}
export interface GetSinkRequestAminoMsg {
  type: "/google.logging.v2.GetSinkRequest";
  value: GetSinkRequestAmino;
}
/** The parameters to `GetSink`. */
export interface GetSinkRequestSDKType {
  sink_name: string;
}
/** The parameters to `CreateSink`. */
export interface CreateSinkRequest {
  /**
   * Required. The resource in which to create the sink:
   * 
   *     "projects/[PROJECT_ID]"
   *     "organizations/[ORGANIZATION_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]"
   *     "folders/[FOLDER_ID]"
   * 
   * For examples:
   * 
   *   `"projects/my-project"`
   *   `"organizations/123456789"`
   */
  parent: string;
  /**
   * Required. The new sink, whose `name` parameter is a sink identifier that
   * is not already in use.
   */
  sink?: LogSink;
  /**
   * Optional. Determines the kind of IAM identity returned as `writer_identity`
   * in the new sink. If this value is omitted or set to false, and if the
   * sink's parent is a project, then the value returned as `writer_identity` is
   * the same group or service account used by Cloud Logging before the addition
   * of writer identities to this API. The sink's destination must be in the
   * same project as the sink itself.
   * 
   * If this field is set to true, or if the sink is owned by a non-project
   * resource such as an organization, then the value of `writer_identity` will
   * be a unique service account used only for exports from the new sink. For
   * more information, see `writer_identity` in [LogSink][google.logging.v2.LogSink].
   */
  uniqueWriterIdentity: boolean;
}
export interface CreateSinkRequestProtoMsg {
  typeUrl: "/google.logging.v2.CreateSinkRequest";
  value: Uint8Array;
}
/** The parameters to `CreateSink`. */
export interface CreateSinkRequestAmino {
  /**
   * Required. The resource in which to create the sink:
   * 
   *     "projects/[PROJECT_ID]"
   *     "organizations/[ORGANIZATION_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]"
   *     "folders/[FOLDER_ID]"
   * 
   * For examples:
   * 
   *   `"projects/my-project"`
   *   `"organizations/123456789"`
   */
  parent?: string;
  /**
   * Required. The new sink, whose `name` parameter is a sink identifier that
   * is not already in use.
   */
  sink?: LogSinkAmino;
  /**
   * Optional. Determines the kind of IAM identity returned as `writer_identity`
   * in the new sink. If this value is omitted or set to false, and if the
   * sink's parent is a project, then the value returned as `writer_identity` is
   * the same group or service account used by Cloud Logging before the addition
   * of writer identities to this API. The sink's destination must be in the
   * same project as the sink itself.
   * 
   * If this field is set to true, or if the sink is owned by a non-project
   * resource such as an organization, then the value of `writer_identity` will
   * be a unique service account used only for exports from the new sink. For
   * more information, see `writer_identity` in [LogSink][google.logging.v2.LogSink].
   */
  unique_writer_identity?: boolean;
}
export interface CreateSinkRequestAminoMsg {
  type: "/google.logging.v2.CreateSinkRequest";
  value: CreateSinkRequestAmino;
}
/** The parameters to `CreateSink`. */
export interface CreateSinkRequestSDKType {
  parent: string;
  sink?: LogSinkSDKType;
  unique_writer_identity: boolean;
}
/** The parameters to `UpdateSink`. */
export interface UpdateSinkRequest {
  /**
   * Required. The full resource name of the sink to update, including the parent
   * resource and the sink identifier:
   * 
   *     "projects/[PROJECT_ID]/sinks/[SINK_ID]"
   *     "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
   *     "folders/[FOLDER_ID]/sinks/[SINK_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/sinks/my-sink"`
   */
  sinkName: string;
  /**
   * Required. The updated sink, whose name is the same identifier that appears as part
   * of `sink_name`.
   */
  sink?: LogSink;
  /**
   * Optional. See [sinks.create][google.logging.v2.ConfigServiceV2.CreateSink]
   * for a description of this field. When updating a sink, the effect of this
   * field on the value of `writer_identity` in the updated sink depends on both
   * the old and new values of this field:
   * 
   * +   If the old and new values of this field are both false or both true,
   *     then there is no change to the sink's `writer_identity`.
   * +   If the old value is false and the new value is true, then
   *     `writer_identity` is changed to a unique service account.
   * +   It is an error if the old value is true and the new value is
   *     set to false or defaulted to false.
   */
  uniqueWriterIdentity: boolean;
  /**
   * Optional. Field mask that specifies the fields in `sink` that need
   * an update. A sink field will be overwritten if, and only if, it is
   * in the update mask. `name` and output only fields cannot be updated.
   * 
   * An empty `updateMask` is temporarily treated as using the following mask
   * for backwards compatibility purposes:
   * 
   *   `destination,filter,includeChildren`
   * 
   * At some point in the future, behavior will be removed and specifying an
   * empty `updateMask` will be an error.
   * 
   * For a detailed `FieldMask` definition, see
   * https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask
   * 
   * For example: `updateMask=filter`
   */
  updateMask?: FieldMask;
}
export interface UpdateSinkRequestProtoMsg {
  typeUrl: "/google.logging.v2.UpdateSinkRequest";
  value: Uint8Array;
}
/** The parameters to `UpdateSink`. */
export interface UpdateSinkRequestAmino {
  /**
   * Required. The full resource name of the sink to update, including the parent
   * resource and the sink identifier:
   * 
   *     "projects/[PROJECT_ID]/sinks/[SINK_ID]"
   *     "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
   *     "folders/[FOLDER_ID]/sinks/[SINK_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/sinks/my-sink"`
   */
  sink_name?: string;
  /**
   * Required. The updated sink, whose name is the same identifier that appears as part
   * of `sink_name`.
   */
  sink?: LogSinkAmino;
  /**
   * Optional. See [sinks.create][google.logging.v2.ConfigServiceV2.CreateSink]
   * for a description of this field. When updating a sink, the effect of this
   * field on the value of `writer_identity` in the updated sink depends on both
   * the old and new values of this field:
   * 
   * +   If the old and new values of this field are both false or both true,
   *     then there is no change to the sink's `writer_identity`.
   * +   If the old value is false and the new value is true, then
   *     `writer_identity` is changed to a unique service account.
   * +   It is an error if the old value is true and the new value is
   *     set to false or defaulted to false.
   */
  unique_writer_identity?: boolean;
  /**
   * Optional. Field mask that specifies the fields in `sink` that need
   * an update. A sink field will be overwritten if, and only if, it is
   * in the update mask. `name` and output only fields cannot be updated.
   * 
   * An empty `updateMask` is temporarily treated as using the following mask
   * for backwards compatibility purposes:
   * 
   *   `destination,filter,includeChildren`
   * 
   * At some point in the future, behavior will be removed and specifying an
   * empty `updateMask` will be an error.
   * 
   * For a detailed `FieldMask` definition, see
   * https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask
   * 
   * For example: `updateMask=filter`
   */
  update_mask?: FieldMaskAmino;
}
export interface UpdateSinkRequestAminoMsg {
  type: "/google.logging.v2.UpdateSinkRequest";
  value: UpdateSinkRequestAmino;
}
/** The parameters to `UpdateSink`. */
export interface UpdateSinkRequestSDKType {
  sink_name: string;
  sink?: LogSinkSDKType;
  unique_writer_identity: boolean;
  update_mask?: FieldMaskSDKType;
}
/** The parameters to `DeleteSink`. */
export interface DeleteSinkRequest {
  /**
   * Required. The full resource name of the sink to delete, including the parent
   * resource and the sink identifier:
   * 
   *     "projects/[PROJECT_ID]/sinks/[SINK_ID]"
   *     "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
   *     "folders/[FOLDER_ID]/sinks/[SINK_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/sinks/my-sink"`
   */
  sinkName: string;
}
export interface DeleteSinkRequestProtoMsg {
  typeUrl: "/google.logging.v2.DeleteSinkRequest";
  value: Uint8Array;
}
/** The parameters to `DeleteSink`. */
export interface DeleteSinkRequestAmino {
  /**
   * Required. The full resource name of the sink to delete, including the parent
   * resource and the sink identifier:
   * 
   *     "projects/[PROJECT_ID]/sinks/[SINK_ID]"
   *     "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
   *     "folders/[FOLDER_ID]/sinks/[SINK_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/sinks/my-sink"`
   */
  sink_name?: string;
}
export interface DeleteSinkRequestAminoMsg {
  type: "/google.logging.v2.DeleteSinkRequest";
  value: DeleteSinkRequestAmino;
}
/** The parameters to `DeleteSink`. */
export interface DeleteSinkRequestSDKType {
  sink_name: string;
}
/**
 * Specifies a set of log entries that are filtered out by a sink. If
 * your Google Cloud resource receives a large volume of log entries, you can
 * use exclusions to reduce your chargeable logs. Note that exclusions on
 * organization-level and folder-level sinks don't apply to child resources.
 * Note also that you cannot modify the _Required sink or exclude logs from it.
 */
export interface LogExclusion {
  /**
   * Required. A client-assigned identifier, such as `"load-balancer-exclusion"`.
   * Identifiers are limited to 100 characters and can include only letters,
   * digits, underscores, hyphens, and periods. First character has to be
   * alphanumeric.
   */
  name: string;
  /** Optional. A description of this exclusion. */
  description: string;
  /**
   * Required. An [advanced logs
   * filter](https://cloud.google.com/logging/docs/view/advanced-queries) that
   * matches the log entries to be excluded. By using the [sample
   * function](https://cloud.google.com/logging/docs/view/advanced-queries#sample),
   * you can exclude less than 100% of the matching log entries.
   * 
   * For example, the following query matches 99% of low-severity log entries
   * from Google Cloud Storage buckets:
   * 
   *   `resource.type=gcs_bucket severity<ERROR sample(insertId, 0.99)`
   */
  filter: string;
  /**
   * Optional. If set to True, then this exclusion is disabled and it does not
   * exclude any log entries. You can [update an
   * exclusion][google.logging.v2.ConfigServiceV2.UpdateExclusion] to change the
   * value of this field.
   */
  disabled: boolean;
  /**
   * Output only. The creation timestamp of the exclusion.
   * 
   * This field may not be present for older exclusions.
   */
  createTime?: Date;
  /**
   * Output only. The last update timestamp of the exclusion.
   * 
   * This field may not be present for older exclusions.
   */
  updateTime?: Date;
}
export interface LogExclusionProtoMsg {
  typeUrl: "/google.logging.v2.LogExclusion";
  value: Uint8Array;
}
/**
 * Specifies a set of log entries that are filtered out by a sink. If
 * your Google Cloud resource receives a large volume of log entries, you can
 * use exclusions to reduce your chargeable logs. Note that exclusions on
 * organization-level and folder-level sinks don't apply to child resources.
 * Note also that you cannot modify the _Required sink or exclude logs from it.
 */
export interface LogExclusionAmino {
  /**
   * Required. A client-assigned identifier, such as `"load-balancer-exclusion"`.
   * Identifiers are limited to 100 characters and can include only letters,
   * digits, underscores, hyphens, and periods. First character has to be
   * alphanumeric.
   */
  name?: string;
  /** Optional. A description of this exclusion. */
  description?: string;
  /**
   * Required. An [advanced logs
   * filter](https://cloud.google.com/logging/docs/view/advanced-queries) that
   * matches the log entries to be excluded. By using the [sample
   * function](https://cloud.google.com/logging/docs/view/advanced-queries#sample),
   * you can exclude less than 100% of the matching log entries.
   * 
   * For example, the following query matches 99% of low-severity log entries
   * from Google Cloud Storage buckets:
   * 
   *   `resource.type=gcs_bucket severity<ERROR sample(insertId, 0.99)`
   */
  filter?: string;
  /**
   * Optional. If set to True, then this exclusion is disabled and it does not
   * exclude any log entries. You can [update an
   * exclusion][google.logging.v2.ConfigServiceV2.UpdateExclusion] to change the
   * value of this field.
   */
  disabled?: boolean;
  /**
   * Output only. The creation timestamp of the exclusion.
   * 
   * This field may not be present for older exclusions.
   */
  create_time?: string;
  /**
   * Output only. The last update timestamp of the exclusion.
   * 
   * This field may not be present for older exclusions.
   */
  update_time?: string;
}
export interface LogExclusionAminoMsg {
  type: "/google.logging.v2.LogExclusion";
  value: LogExclusionAmino;
}
/**
 * Specifies a set of log entries that are filtered out by a sink. If
 * your Google Cloud resource receives a large volume of log entries, you can
 * use exclusions to reduce your chargeable logs. Note that exclusions on
 * organization-level and folder-level sinks don't apply to child resources.
 * Note also that you cannot modify the _Required sink or exclude logs from it.
 */
export interface LogExclusionSDKType {
  name: string;
  description: string;
  filter: string;
  disabled: boolean;
  create_time?: Date;
  update_time?: Date;
}
/** The parameters to `ListExclusions`. */
export interface ListExclusionsRequest {
  /**
   * Required. The parent resource whose exclusions are to be listed.
   * 
   *     "projects/[PROJECT_ID]"
   *     "organizations/[ORGANIZATION_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]"
   *     "folders/[FOLDER_ID]"
   */
  parent: string;
  /**
   * Optional. If present, then retrieve the next batch of results from the
   * preceding call to this method. `pageToken` must be the value of
   * `nextPageToken` from the previous response. The values of other method
   * parameters should be identical to those in the previous call.
   */
  pageToken: string;
  /**
   * Optional. The maximum number of results to return from this request.
   * Non-positive values are ignored. The presence of `nextPageToken` in the
   * response indicates that more results might be available.
   */
  pageSize: number;
}
export interface ListExclusionsRequestProtoMsg {
  typeUrl: "/google.logging.v2.ListExclusionsRequest";
  value: Uint8Array;
}
/** The parameters to `ListExclusions`. */
export interface ListExclusionsRequestAmino {
  /**
   * Required. The parent resource whose exclusions are to be listed.
   * 
   *     "projects/[PROJECT_ID]"
   *     "organizations/[ORGANIZATION_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]"
   *     "folders/[FOLDER_ID]"
   */
  parent?: string;
  /**
   * Optional. If present, then retrieve the next batch of results from the
   * preceding call to this method. `pageToken` must be the value of
   * `nextPageToken` from the previous response. The values of other method
   * parameters should be identical to those in the previous call.
   */
  page_token?: string;
  /**
   * Optional. The maximum number of results to return from this request.
   * Non-positive values are ignored. The presence of `nextPageToken` in the
   * response indicates that more results might be available.
   */
  page_size?: number;
}
export interface ListExclusionsRequestAminoMsg {
  type: "/google.logging.v2.ListExclusionsRequest";
  value: ListExclusionsRequestAmino;
}
/** The parameters to `ListExclusions`. */
export interface ListExclusionsRequestSDKType {
  parent: string;
  page_token: string;
  page_size: number;
}
/** Result returned from `ListExclusions`. */
export interface ListExclusionsResponse {
  /** A list of exclusions. */
  exclusions: LogExclusion[];
  /**
   * If there might be more results than appear in this response, then
   * `nextPageToken` is included. To get the next set of results, call the same
   * method again using the value of `nextPageToken` as `pageToken`.
   */
  nextPageToken: string;
}
export interface ListExclusionsResponseProtoMsg {
  typeUrl: "/google.logging.v2.ListExclusionsResponse";
  value: Uint8Array;
}
/** Result returned from `ListExclusions`. */
export interface ListExclusionsResponseAmino {
  /** A list of exclusions. */
  exclusions?: LogExclusionAmino[];
  /**
   * If there might be more results than appear in this response, then
   * `nextPageToken` is included. To get the next set of results, call the same
   * method again using the value of `nextPageToken` as `pageToken`.
   */
  next_page_token?: string;
}
export interface ListExclusionsResponseAminoMsg {
  type: "/google.logging.v2.ListExclusionsResponse";
  value: ListExclusionsResponseAmino;
}
/** Result returned from `ListExclusions`. */
export interface ListExclusionsResponseSDKType {
  exclusions: LogExclusionSDKType[];
  next_page_token: string;
}
/** The parameters to `GetExclusion`. */
export interface GetExclusionRequest {
  /**
   * Required. The resource name of an existing exclusion:
   * 
   *     "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]"
   *     "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]"
   *     "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/exclusions/my-exclusion"`
   */
  name: string;
}
export interface GetExclusionRequestProtoMsg {
  typeUrl: "/google.logging.v2.GetExclusionRequest";
  value: Uint8Array;
}
/** The parameters to `GetExclusion`. */
export interface GetExclusionRequestAmino {
  /**
   * Required. The resource name of an existing exclusion:
   * 
   *     "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]"
   *     "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]"
   *     "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/exclusions/my-exclusion"`
   */
  name?: string;
}
export interface GetExclusionRequestAminoMsg {
  type: "/google.logging.v2.GetExclusionRequest";
  value: GetExclusionRequestAmino;
}
/** The parameters to `GetExclusion`. */
export interface GetExclusionRequestSDKType {
  name: string;
}
/** The parameters to `CreateExclusion`. */
export interface CreateExclusionRequest {
  /**
   * Required. The parent resource in which to create the exclusion:
   * 
   *     "projects/[PROJECT_ID]"
   *     "organizations/[ORGANIZATION_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]"
   *     "folders/[FOLDER_ID]"
   * 
   * For examples:
   * 
   *   `"projects/my-logging-project"`
   *   `"organizations/123456789"`
   */
  parent: string;
  /**
   * Required. The new exclusion, whose `name` parameter is an exclusion name
   * that is not already used in the parent resource.
   */
  exclusion?: LogExclusion;
}
export interface CreateExclusionRequestProtoMsg {
  typeUrl: "/google.logging.v2.CreateExclusionRequest";
  value: Uint8Array;
}
/** The parameters to `CreateExclusion`. */
export interface CreateExclusionRequestAmino {
  /**
   * Required. The parent resource in which to create the exclusion:
   * 
   *     "projects/[PROJECT_ID]"
   *     "organizations/[ORGANIZATION_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]"
   *     "folders/[FOLDER_ID]"
   * 
   * For examples:
   * 
   *   `"projects/my-logging-project"`
   *   `"organizations/123456789"`
   */
  parent?: string;
  /**
   * Required. The new exclusion, whose `name` parameter is an exclusion name
   * that is not already used in the parent resource.
   */
  exclusion?: LogExclusionAmino;
}
export interface CreateExclusionRequestAminoMsg {
  type: "/google.logging.v2.CreateExclusionRequest";
  value: CreateExclusionRequestAmino;
}
/** The parameters to `CreateExclusion`. */
export interface CreateExclusionRequestSDKType {
  parent: string;
  exclusion?: LogExclusionSDKType;
}
/** The parameters to `UpdateExclusion`. */
export interface UpdateExclusionRequest {
  /**
   * Required. The resource name of the exclusion to update:
   * 
   *     "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]"
   *     "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]"
   *     "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/exclusions/my-exclusion"`
   */
  name: string;
  /**
   * Required. New values for the existing exclusion. Only the fields specified in
   * `update_mask` are relevant.
   */
  exclusion?: LogExclusion;
  /**
   * Required. A non-empty list of fields to change in the existing exclusion. New values
   * for the fields are taken from the corresponding fields in the
   * [LogExclusion][google.logging.v2.LogExclusion] included in this request. Fields not mentioned in
   * `update_mask` are not changed and are ignored in the request.
   * 
   * For example, to change the filter and description of an exclusion,
   * specify an `update_mask` of `"filter,description"`.
   */
  updateMask?: FieldMask;
}
export interface UpdateExclusionRequestProtoMsg {
  typeUrl: "/google.logging.v2.UpdateExclusionRequest";
  value: Uint8Array;
}
/** The parameters to `UpdateExclusion`. */
export interface UpdateExclusionRequestAmino {
  /**
   * Required. The resource name of the exclusion to update:
   * 
   *     "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]"
   *     "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]"
   *     "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/exclusions/my-exclusion"`
   */
  name?: string;
  /**
   * Required. New values for the existing exclusion. Only the fields specified in
   * `update_mask` are relevant.
   */
  exclusion?: LogExclusionAmino;
  /**
   * Required. A non-empty list of fields to change in the existing exclusion. New values
   * for the fields are taken from the corresponding fields in the
   * [LogExclusion][google.logging.v2.LogExclusion] included in this request. Fields not mentioned in
   * `update_mask` are not changed and are ignored in the request.
   * 
   * For example, to change the filter and description of an exclusion,
   * specify an `update_mask` of `"filter,description"`.
   */
  update_mask?: FieldMaskAmino;
}
export interface UpdateExclusionRequestAminoMsg {
  type: "/google.logging.v2.UpdateExclusionRequest";
  value: UpdateExclusionRequestAmino;
}
/** The parameters to `UpdateExclusion`. */
export interface UpdateExclusionRequestSDKType {
  name: string;
  exclusion?: LogExclusionSDKType;
  update_mask?: FieldMaskSDKType;
}
/** The parameters to `DeleteExclusion`. */
export interface DeleteExclusionRequest {
  /**
   * Required. The resource name of an existing exclusion to delete:
   * 
   *     "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]"
   *     "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]"
   *     "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/exclusions/my-exclusion"`
   */
  name: string;
}
export interface DeleteExclusionRequestProtoMsg {
  typeUrl: "/google.logging.v2.DeleteExclusionRequest";
  value: Uint8Array;
}
/** The parameters to `DeleteExclusion`. */
export interface DeleteExclusionRequestAmino {
  /**
   * Required. The resource name of an existing exclusion to delete:
   * 
   *     "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]"
   *     "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]"
   *     "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/exclusions/my-exclusion"`
   */
  name?: string;
}
export interface DeleteExclusionRequestAminoMsg {
  type: "/google.logging.v2.DeleteExclusionRequest";
  value: DeleteExclusionRequestAmino;
}
/** The parameters to `DeleteExclusion`. */
export interface DeleteExclusionRequestSDKType {
  name: string;
}
/**
 * The parameters to
 * [GetCmekSettings][google.logging.v2.ConfigServiceV2.GetCmekSettings].
 * 
 * See [Enabling CMEK for Log
 * Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for
 * more information.
 */
export interface GetCmekSettingsRequest {
  /**
   * Required. The resource for which to retrieve CMEK settings.
   * 
   *     "projects/[PROJECT_ID]/cmekSettings"
   *     "organizations/[ORGANIZATION_ID]/cmekSettings"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/cmekSettings"
   *     "folders/[FOLDER_ID]/cmekSettings"
   * 
   * For example:
   * 
   *   `"organizations/12345/cmekSettings"`
   * 
   * Note: CMEK for the Log Router can be configured for Google Cloud projects,
   * folders, organizations and billing accounts. Once configured for an
   * organization, it applies to all projects and folders in the Google Cloud
   * organization.
   */
  name: string;
}
export interface GetCmekSettingsRequestProtoMsg {
  typeUrl: "/google.logging.v2.GetCmekSettingsRequest";
  value: Uint8Array;
}
/**
 * The parameters to
 * [GetCmekSettings][google.logging.v2.ConfigServiceV2.GetCmekSettings].
 * 
 * See [Enabling CMEK for Log
 * Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for
 * more information.
 */
export interface GetCmekSettingsRequestAmino {
  /**
   * Required. The resource for which to retrieve CMEK settings.
   * 
   *     "projects/[PROJECT_ID]/cmekSettings"
   *     "organizations/[ORGANIZATION_ID]/cmekSettings"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/cmekSettings"
   *     "folders/[FOLDER_ID]/cmekSettings"
   * 
   * For example:
   * 
   *   `"organizations/12345/cmekSettings"`
   * 
   * Note: CMEK for the Log Router can be configured for Google Cloud projects,
   * folders, organizations and billing accounts. Once configured for an
   * organization, it applies to all projects and folders in the Google Cloud
   * organization.
   */
  name?: string;
}
export interface GetCmekSettingsRequestAminoMsg {
  type: "/google.logging.v2.GetCmekSettingsRequest";
  value: GetCmekSettingsRequestAmino;
}
/**
 * The parameters to
 * [GetCmekSettings][google.logging.v2.ConfigServiceV2.GetCmekSettings].
 * 
 * See [Enabling CMEK for Log
 * Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for
 * more information.
 */
export interface GetCmekSettingsRequestSDKType {
  name: string;
}
/**
 * The parameters to
 * [UpdateCmekSettings][google.logging.v2.ConfigServiceV2.UpdateCmekSettings].
 * 
 * See [Enabling CMEK for Log
 * Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for
 * more information.
 */
export interface UpdateCmekSettingsRequest {
  /**
   * Required. The resource name for the CMEK settings to update.
   * 
   *     "projects/[PROJECT_ID]/cmekSettings"
   *     "organizations/[ORGANIZATION_ID]/cmekSettings"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/cmekSettings"
   *     "folders/[FOLDER_ID]/cmekSettings"
   * 
   * For example:
   * 
   *   `"organizations/12345/cmekSettings"`
   * 
   * Note: CMEK for the Log Router can currently only be configured for Google
   * Cloud organizations. Once configured, it applies to all projects and
   * folders in the Google Cloud organization.
   */
  name: string;
  /**
   * Required. The CMEK settings to update.
   * 
   * See [Enabling CMEK for Log
   * Router](https://cloud.google.com/logging/docs/routing/managed-encryption)
   * for more information.
   */
  cmekSettings?: CmekSettings;
  /**
   * Optional. Field mask identifying which fields from `cmek_settings` should
   * be updated. A field will be overwritten if and only if it is in the update
   * mask. Output only fields cannot be updated.
   * 
   * See [FieldMask][google.protobuf.FieldMask] for more information.
   * 
   * For example: `"updateMask=kmsKeyName"`
   */
  updateMask?: FieldMask;
}
export interface UpdateCmekSettingsRequestProtoMsg {
  typeUrl: "/google.logging.v2.UpdateCmekSettingsRequest";
  value: Uint8Array;
}
/**
 * The parameters to
 * [UpdateCmekSettings][google.logging.v2.ConfigServiceV2.UpdateCmekSettings].
 * 
 * See [Enabling CMEK for Log
 * Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for
 * more information.
 */
export interface UpdateCmekSettingsRequestAmino {
  /**
   * Required. The resource name for the CMEK settings to update.
   * 
   *     "projects/[PROJECT_ID]/cmekSettings"
   *     "organizations/[ORGANIZATION_ID]/cmekSettings"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/cmekSettings"
   *     "folders/[FOLDER_ID]/cmekSettings"
   * 
   * For example:
   * 
   *   `"organizations/12345/cmekSettings"`
   * 
   * Note: CMEK for the Log Router can currently only be configured for Google
   * Cloud organizations. Once configured, it applies to all projects and
   * folders in the Google Cloud organization.
   */
  name?: string;
  /**
   * Required. The CMEK settings to update.
   * 
   * See [Enabling CMEK for Log
   * Router](https://cloud.google.com/logging/docs/routing/managed-encryption)
   * for more information.
   */
  cmek_settings?: CmekSettingsAmino;
  /**
   * Optional. Field mask identifying which fields from `cmek_settings` should
   * be updated. A field will be overwritten if and only if it is in the update
   * mask. Output only fields cannot be updated.
   * 
   * See [FieldMask][google.protobuf.FieldMask] for more information.
   * 
   * For example: `"updateMask=kmsKeyName"`
   */
  update_mask?: FieldMaskAmino;
}
export interface UpdateCmekSettingsRequestAminoMsg {
  type: "/google.logging.v2.UpdateCmekSettingsRequest";
  value: UpdateCmekSettingsRequestAmino;
}
/**
 * The parameters to
 * [UpdateCmekSettings][google.logging.v2.ConfigServiceV2.UpdateCmekSettings].
 * 
 * See [Enabling CMEK for Log
 * Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for
 * more information.
 */
export interface UpdateCmekSettingsRequestSDKType {
  name: string;
  cmek_settings?: CmekSettingsSDKType;
  update_mask?: FieldMaskSDKType;
}
/**
 * Describes the customer-managed encryption key (CMEK) settings associated with
 * a project, folder, organization, billing account, or flexible resource.
 * 
 * Note: CMEK for the Log Router can currently only be configured for Google
 * Cloud organizations. Once configured, it applies to all projects and folders
 * in the Google Cloud organization.
 * 
 * See [Enabling CMEK for Log
 * Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for
 * more information.
 */
export interface CmekSettings {
  /** Output only. The resource name of the CMEK settings. */
  name: string;
  /**
   * The resource name for the configured Cloud KMS key.
   * 
   * KMS key name format:
   * 
   *     "projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]"
   * 
   * For example:
   * 
   *   `"projects/my-project/locations/us-central1/keyRings/my-ring/cryptoKeys/my-key"`
   * 
   * 
   * 
   * To enable CMEK for the Log Router, set this field to a valid
   * `kms_key_name` for which the associated service account has the required
   * cloudkms.cryptoKeyEncrypterDecrypter roles assigned for the key.
   * 
   * The Cloud KMS key used by the Log Router can be updated by changing the
   * `kms_key_name` to a new valid key name or disabled by setting the key name
   * to an empty string. Encryption operations that are in progress will be
   * completed with the key that was in use when they started. Decryption
   * operations will be completed using the key that was used at the time of
   * encryption unless access to that key has been revoked.
   * 
   * To disable CMEK for the Log Router, set this field to an empty string.
   * 
   * See [Enabling CMEK for Log
   * Router](https://cloud.google.com/logging/docs/routing/managed-encryption)
   * for more information.
   */
  kmsKeyName: string;
  /**
   * Output only. The service account that will be used by the Log Router to access your
   * Cloud KMS key.
   * 
   * Before enabling CMEK for Log Router, you must first assign the
   * cloudkms.cryptoKeyEncrypterDecrypter role to the service account that
   * the Log Router will use to access your Cloud KMS key. Use
   * [GetCmekSettings][google.logging.v2.ConfigServiceV2.GetCmekSettings] to
   * obtain the service account ID.
   * 
   * See [Enabling CMEK for Log
   * Router](https://cloud.google.com/logging/docs/routing/managed-encryption)
   * for more information.
   */
  serviceAccountId: string;
}
export interface CmekSettingsProtoMsg {
  typeUrl: "/google.logging.v2.CmekSettings";
  value: Uint8Array;
}
/**
 * Describes the customer-managed encryption key (CMEK) settings associated with
 * a project, folder, organization, billing account, or flexible resource.
 * 
 * Note: CMEK for the Log Router can currently only be configured for Google
 * Cloud organizations. Once configured, it applies to all projects and folders
 * in the Google Cloud organization.
 * 
 * See [Enabling CMEK for Log
 * Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for
 * more information.
 */
export interface CmekSettingsAmino {
  /** Output only. The resource name of the CMEK settings. */
  name?: string;
  /**
   * The resource name for the configured Cloud KMS key.
   * 
   * KMS key name format:
   * 
   *     "projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]"
   * 
   * For example:
   * 
   *   `"projects/my-project/locations/us-central1/keyRings/my-ring/cryptoKeys/my-key"`
   * 
   * 
   * 
   * To enable CMEK for the Log Router, set this field to a valid
   * `kms_key_name` for which the associated service account has the required
   * cloudkms.cryptoKeyEncrypterDecrypter roles assigned for the key.
   * 
   * The Cloud KMS key used by the Log Router can be updated by changing the
   * `kms_key_name` to a new valid key name or disabled by setting the key name
   * to an empty string. Encryption operations that are in progress will be
   * completed with the key that was in use when they started. Decryption
   * operations will be completed using the key that was used at the time of
   * encryption unless access to that key has been revoked.
   * 
   * To disable CMEK for the Log Router, set this field to an empty string.
   * 
   * See [Enabling CMEK for Log
   * Router](https://cloud.google.com/logging/docs/routing/managed-encryption)
   * for more information.
   */
  kms_key_name?: string;
  /**
   * Output only. The service account that will be used by the Log Router to access your
   * Cloud KMS key.
   * 
   * Before enabling CMEK for Log Router, you must first assign the
   * cloudkms.cryptoKeyEncrypterDecrypter role to the service account that
   * the Log Router will use to access your Cloud KMS key. Use
   * [GetCmekSettings][google.logging.v2.ConfigServiceV2.GetCmekSettings] to
   * obtain the service account ID.
   * 
   * See [Enabling CMEK for Log
   * Router](https://cloud.google.com/logging/docs/routing/managed-encryption)
   * for more information.
   */
  service_account_id?: string;
}
export interface CmekSettingsAminoMsg {
  type: "/google.logging.v2.CmekSettings";
  value: CmekSettingsAmino;
}
/**
 * Describes the customer-managed encryption key (CMEK) settings associated with
 * a project, folder, organization, billing account, or flexible resource.
 * 
 * Note: CMEK for the Log Router can currently only be configured for Google
 * Cloud organizations. Once configured, it applies to all projects and folders
 * in the Google Cloud organization.
 * 
 * See [Enabling CMEK for Log
 * Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for
 * more information.
 */
export interface CmekSettingsSDKType {
  name: string;
  kms_key_name: string;
  service_account_id: string;
}
/**
 * The parameters to
 * [GetSettings][google.logging.v2.ConfigServiceV2.GetSettings].
 * 
 * See [Enabling CMEK for Log
 * Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for
 * more information.
 */
export interface GetSettingsRequest {
  /**
   * Required. The resource for which to retrieve settings.
   * 
   *     "projects/[PROJECT_ID]/settings"
   *     "organizations/[ORGANIZATION_ID]/settings"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/settings"
   *     "folders/[FOLDER_ID]/settings"
   * 
   * For example:
   * 
   *   `"organizations/12345/settings"`
   * 
   * Note: Settings for the Log Router can be get for Google Cloud projects,
   * folders, organizations and billing accounts. Currently it can only be
   * configured for organizations. Once configured for an organization, it
   * applies to all projects and folders in the Google Cloud organization.
   */
  name: string;
}
export interface GetSettingsRequestProtoMsg {
  typeUrl: "/google.logging.v2.GetSettingsRequest";
  value: Uint8Array;
}
/**
 * The parameters to
 * [GetSettings][google.logging.v2.ConfigServiceV2.GetSettings].
 * 
 * See [Enabling CMEK for Log
 * Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for
 * more information.
 */
export interface GetSettingsRequestAmino {
  /**
   * Required. The resource for which to retrieve settings.
   * 
   *     "projects/[PROJECT_ID]/settings"
   *     "organizations/[ORGANIZATION_ID]/settings"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/settings"
   *     "folders/[FOLDER_ID]/settings"
   * 
   * For example:
   * 
   *   `"organizations/12345/settings"`
   * 
   * Note: Settings for the Log Router can be get for Google Cloud projects,
   * folders, organizations and billing accounts. Currently it can only be
   * configured for organizations. Once configured for an organization, it
   * applies to all projects and folders in the Google Cloud organization.
   */
  name?: string;
}
export interface GetSettingsRequestAminoMsg {
  type: "/google.logging.v2.GetSettingsRequest";
  value: GetSettingsRequestAmino;
}
/**
 * The parameters to
 * [GetSettings][google.logging.v2.ConfigServiceV2.GetSettings].
 * 
 * See [Enabling CMEK for Log
 * Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for
 * more information.
 */
export interface GetSettingsRequestSDKType {
  name: string;
}
/**
 * The parameters to
 * [UpdateSettings][google.logging.v2.ConfigServiceV2.UpdateSettings].
 * 
 * See [Enabling CMEK for Log
 * Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for
 * more information.
 */
export interface UpdateSettingsRequest {
  /**
   * Required. The resource name for the settings to update.
   * 
   *     "organizations/[ORGANIZATION_ID]/settings"
   * 
   * For example:
   * 
   *   `"organizations/12345/settings"`
   * 
   * Note: Settings for the Log Router can currently only be configured for
   * Google Cloud organizations. Once configured, it applies to all projects and
   * folders in the Google Cloud organization.
   */
  name: string;
  /**
   * Required. The settings to update.
   * 
   * See [Enabling CMEK for Log
   * Router](https://cloud.google.com/logging/docs/routing/managed-encryption)
   * for more information.
   */
  settings?: Settings;
  /**
   * Optional. Field mask identifying which fields from `settings` should
   * be updated. A field will be overwritten if and only if it is in the update
   * mask. Output only fields cannot be updated.
   * 
   * See [FieldMask][google.protobuf.FieldMask] for more information.
   * 
   * For example: `"updateMask=kmsKeyName"`
   */
  updateMask?: FieldMask;
}
export interface UpdateSettingsRequestProtoMsg {
  typeUrl: "/google.logging.v2.UpdateSettingsRequest";
  value: Uint8Array;
}
/**
 * The parameters to
 * [UpdateSettings][google.logging.v2.ConfigServiceV2.UpdateSettings].
 * 
 * See [Enabling CMEK for Log
 * Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for
 * more information.
 */
export interface UpdateSettingsRequestAmino {
  /**
   * Required. The resource name for the settings to update.
   * 
   *     "organizations/[ORGANIZATION_ID]/settings"
   * 
   * For example:
   * 
   *   `"organizations/12345/settings"`
   * 
   * Note: Settings for the Log Router can currently only be configured for
   * Google Cloud organizations. Once configured, it applies to all projects and
   * folders in the Google Cloud organization.
   */
  name?: string;
  /**
   * Required. The settings to update.
   * 
   * See [Enabling CMEK for Log
   * Router](https://cloud.google.com/logging/docs/routing/managed-encryption)
   * for more information.
   */
  settings?: SettingsAmino;
  /**
   * Optional. Field mask identifying which fields from `settings` should
   * be updated. A field will be overwritten if and only if it is in the update
   * mask. Output only fields cannot be updated.
   * 
   * See [FieldMask][google.protobuf.FieldMask] for more information.
   * 
   * For example: `"updateMask=kmsKeyName"`
   */
  update_mask?: FieldMaskAmino;
}
export interface UpdateSettingsRequestAminoMsg {
  type: "/google.logging.v2.UpdateSettingsRequest";
  value: UpdateSettingsRequestAmino;
}
/**
 * The parameters to
 * [UpdateSettings][google.logging.v2.ConfigServiceV2.UpdateSettings].
 * 
 * See [Enabling CMEK for Log
 * Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for
 * more information.
 */
export interface UpdateSettingsRequestSDKType {
  name: string;
  settings?: SettingsSDKType;
  update_mask?: FieldMaskSDKType;
}
/**
 * Describes the settings associated with a project, folder, organization,
 * billing account, or flexible resource.
 */
export interface Settings {
  /** Output only. The resource name of the settings. */
  name: string;
  /**
   * Optional. The resource name for the configured Cloud KMS key.
   * 
   * KMS key name format:
   * 
   *     "projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]"
   * 
   * For example:
   * 
   *   `"projects/my-project/locations/us-central1/keyRings/my-ring/cryptoKeys/my-key"`
   * 
   * 
   * 
   * To enable CMEK for the Log Router, set this field to a valid
   * `kms_key_name` for which the associated service account has the required
   * `roles/cloudkms.cryptoKeyEncrypterDecrypter` role assigned for the key.
   * 
   * The Cloud KMS key used by the Log Router can be updated by changing the
   * `kms_key_name` to a new valid key name. Encryption operations that are in
   * progress will be completed with the key that was in use when they started.
   * Decryption operations will be completed using the key that was used at the
   * time of encryption unless access to that key has been revoked.
   * 
   * To disable CMEK for the Log Router, set this field to an empty string.
   * 
   * See [Enabling CMEK for Log
   * Router](https://cloud.google.com/logging/docs/routing/managed-encryption)
   * for more information.
   */
  kmsKeyName: string;
  /**
   * Output only. The service account that will be used by the Log Router to access your
   * Cloud KMS key.
   * 
   * Before enabling CMEK for Log Router, you must first assign the role
   * `roles/cloudkms.cryptoKeyEncrypterDecrypter` to the service account that
   * the Log Router will use to access your Cloud KMS key. Use
   * [GetSettings][google.logging.v2.ConfigServiceV2.GetSettings] to
   * obtain the service account ID.
   * 
   * See [Enabling CMEK for Log
   * Router](https://cloud.google.com/logging/docs/routing/managed-encryption)
   * for more information.
   */
  kmsServiceAccountId: string;
  /**
   * Optional. The Cloud region that will be used for _Default and _Required log buckets
   * for newly created projects and folders. For example `europe-west1`.
   * This setting does not affect the location of custom log buckets.
   */
  storageLocation: string;
  /**
   * Optional. If set to true, the _Default sink in newly created projects and folders
   * will created in a disabled state. This can be used to automatically disable
   * log ingestion if there is already an aggregated sink configured in the
   * hierarchy. The _Default sink can be re-enabled manually if needed.
   */
  disableDefaultSink: boolean;
}
export interface SettingsProtoMsg {
  typeUrl: "/google.logging.v2.Settings";
  value: Uint8Array;
}
/**
 * Describes the settings associated with a project, folder, organization,
 * billing account, or flexible resource.
 */
export interface SettingsAmino {
  /** Output only. The resource name of the settings. */
  name?: string;
  /**
   * Optional. The resource name for the configured Cloud KMS key.
   * 
   * KMS key name format:
   * 
   *     "projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]"
   * 
   * For example:
   * 
   *   `"projects/my-project/locations/us-central1/keyRings/my-ring/cryptoKeys/my-key"`
   * 
   * 
   * 
   * To enable CMEK for the Log Router, set this field to a valid
   * `kms_key_name` for which the associated service account has the required
   * `roles/cloudkms.cryptoKeyEncrypterDecrypter` role assigned for the key.
   * 
   * The Cloud KMS key used by the Log Router can be updated by changing the
   * `kms_key_name` to a new valid key name. Encryption operations that are in
   * progress will be completed with the key that was in use when they started.
   * Decryption operations will be completed using the key that was used at the
   * time of encryption unless access to that key has been revoked.
   * 
   * To disable CMEK for the Log Router, set this field to an empty string.
   * 
   * See [Enabling CMEK for Log
   * Router](https://cloud.google.com/logging/docs/routing/managed-encryption)
   * for more information.
   */
  kms_key_name?: string;
  /**
   * Output only. The service account that will be used by the Log Router to access your
   * Cloud KMS key.
   * 
   * Before enabling CMEK for Log Router, you must first assign the role
   * `roles/cloudkms.cryptoKeyEncrypterDecrypter` to the service account that
   * the Log Router will use to access your Cloud KMS key. Use
   * [GetSettings][google.logging.v2.ConfigServiceV2.GetSettings] to
   * obtain the service account ID.
   * 
   * See [Enabling CMEK for Log
   * Router](https://cloud.google.com/logging/docs/routing/managed-encryption)
   * for more information.
   */
  kms_service_account_id?: string;
  /**
   * Optional. The Cloud region that will be used for _Default and _Required log buckets
   * for newly created projects and folders. For example `europe-west1`.
   * This setting does not affect the location of custom log buckets.
   */
  storage_location?: string;
  /**
   * Optional. If set to true, the _Default sink in newly created projects and folders
   * will created in a disabled state. This can be used to automatically disable
   * log ingestion if there is already an aggregated sink configured in the
   * hierarchy. The _Default sink can be re-enabled manually if needed.
   */
  disable_default_sink?: boolean;
}
export interface SettingsAminoMsg {
  type: "/google.logging.v2.Settings";
  value: SettingsAmino;
}
/**
 * Describes the settings associated with a project, folder, organization,
 * billing account, or flexible resource.
 */
export interface SettingsSDKType {
  name: string;
  kms_key_name: string;
  kms_service_account_id: string;
  storage_location: string;
  disable_default_sink: boolean;
}
/** The parameters to CopyLogEntries. */
export interface CopyLogEntriesRequest {
  /**
   * Required. Log bucket from which to copy log entries.
   * 
   * For example:
   * 
   *   `"projects/my-project/locations/global/buckets/my-source-bucket"`
   */
  name: string;
  /**
   * Optional. A filter specifying which log entries to copy. The filter must be no more
   * than 20k characters. An empty filter matches all log entries.
   */
  filter: string;
  /** Required. Destination to which to copy log entries. */
  destination: string;
}
export interface CopyLogEntriesRequestProtoMsg {
  typeUrl: "/google.logging.v2.CopyLogEntriesRequest";
  value: Uint8Array;
}
/** The parameters to CopyLogEntries. */
export interface CopyLogEntriesRequestAmino {
  /**
   * Required. Log bucket from which to copy log entries.
   * 
   * For example:
   * 
   *   `"projects/my-project/locations/global/buckets/my-source-bucket"`
   */
  name?: string;
  /**
   * Optional. A filter specifying which log entries to copy. The filter must be no more
   * than 20k characters. An empty filter matches all log entries.
   */
  filter?: string;
  /** Required. Destination to which to copy log entries. */
  destination?: string;
}
export interface CopyLogEntriesRequestAminoMsg {
  type: "/google.logging.v2.CopyLogEntriesRequest";
  value: CopyLogEntriesRequestAmino;
}
/** The parameters to CopyLogEntries. */
export interface CopyLogEntriesRequestSDKType {
  name: string;
  filter: string;
  destination: string;
}
/** Metadata for CopyLogEntries long running operations. */
export interface CopyLogEntriesMetadata {
  /** The create time of an operation. */
  startTime?: Date;
  /** The end time of an operation. */
  endTime?: Date;
  /** State of an operation. */
  state: OperationState;
  /** Identifies whether the user has requested cancellation of the operation. */
  cancellationRequested: boolean;
  /** CopyLogEntries RPC request. */
  request?: CopyLogEntriesRequest;
  /** Estimated progress of the operation (0 - 100%). */
  progress: number;
  /**
   * The IAM identity of a service account that must be granted access to the
   * destination.
   * 
   * If the service account is not granted permission to the destination within
   * an hour, the operation will be cancelled.
   * 
   * For example: `"serviceAccount:foo@bar.com"`
   */
  writerIdentity: string;
}
export interface CopyLogEntriesMetadataProtoMsg {
  typeUrl: "/google.logging.v2.CopyLogEntriesMetadata";
  value: Uint8Array;
}
/** Metadata for CopyLogEntries long running operations. */
export interface CopyLogEntriesMetadataAmino {
  /** The create time of an operation. */
  start_time?: string;
  /** The end time of an operation. */
  end_time?: string;
  /** State of an operation. */
  state?: OperationState;
  /** Identifies whether the user has requested cancellation of the operation. */
  cancellation_requested?: boolean;
  /** CopyLogEntries RPC request. */
  request?: CopyLogEntriesRequestAmino;
  /** Estimated progress of the operation (0 - 100%). */
  progress?: number;
  /**
   * The IAM identity of a service account that must be granted access to the
   * destination.
   * 
   * If the service account is not granted permission to the destination within
   * an hour, the operation will be cancelled.
   * 
   * For example: `"serviceAccount:foo@bar.com"`
   */
  writer_identity?: string;
}
export interface CopyLogEntriesMetadataAminoMsg {
  type: "/google.logging.v2.CopyLogEntriesMetadata";
  value: CopyLogEntriesMetadataAmino;
}
/** Metadata for CopyLogEntries long running operations. */
export interface CopyLogEntriesMetadataSDKType {
  start_time?: Date;
  end_time?: Date;
  state: OperationState;
  cancellation_requested: boolean;
  request?: CopyLogEntriesRequestSDKType;
  progress: number;
  writer_identity: string;
}
/** Response type for CopyLogEntries long running operations. */
export interface CopyLogEntriesResponse {
  /** Number of log entries copied. */
  logEntriesCopiedCount: bigint;
}
export interface CopyLogEntriesResponseProtoMsg {
  typeUrl: "/google.logging.v2.CopyLogEntriesResponse";
  value: Uint8Array;
}
/** Response type for CopyLogEntries long running operations. */
export interface CopyLogEntriesResponseAmino {
  /** Number of log entries copied. */
  log_entries_copied_count?: string;
}
export interface CopyLogEntriesResponseAminoMsg {
  type: "/google.logging.v2.CopyLogEntriesResponse";
  value: CopyLogEntriesResponseAmino;
}
/** Response type for CopyLogEntries long running operations. */
export interface CopyLogEntriesResponseSDKType {
  log_entries_copied_count: bigint;
}
function createBaseLogBucket(): LogBucket {
  return {
    name: "",
    description: "",
    createTime: undefined,
    updateTime: undefined,
    retentionDays: 0,
    locked: false,
    lifecycleState: 0,
    restrictedFields: [],
    cmekSettings: undefined
  };
}
export const LogBucket = {
  typeUrl: "/google.logging.v2.LogBucket",
  is(o: any): o is LogBucket {
    return o && (o.$typeUrl === LogBucket.typeUrl || typeof o.name === "string" && typeof o.description === "string" && typeof o.retentionDays === "number" && typeof o.locked === "boolean" && isSet(o.lifecycleState) && Array.isArray(o.restrictedFields) && (!o.restrictedFields.length || typeof o.restrictedFields[0] === "string"));
  },
  isSDK(o: any): o is LogBucketSDKType {
    return o && (o.$typeUrl === LogBucket.typeUrl || typeof o.name === "string" && typeof o.description === "string" && typeof o.retention_days === "number" && typeof o.locked === "boolean" && isSet(o.lifecycle_state) && Array.isArray(o.restricted_fields) && (!o.restricted_fields.length || typeof o.restricted_fields[0] === "string"));
  },
  isAmino(o: any): o is LogBucketAmino {
    return o && (o.$typeUrl === LogBucket.typeUrl || typeof o.name === "string" && typeof o.description === "string" && typeof o.retention_days === "number" && typeof o.locked === "boolean" && isSet(o.lifecycle_state) && Array.isArray(o.restricted_fields) && (!o.restricted_fields.length || typeof o.restricted_fields[0] === "string"));
  },
  encode(message: LogBucket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(26).string(message.description);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.retentionDays !== undefined) {
      writer.uint32(88).int32(message.retentionDays);
    }
    if (message.locked !== undefined) {
      writer.uint32(72).bool(message.locked);
    }
    if (message.lifecycleState !== 0) {
      writer.uint32(96).int32(message.lifecycleState);
    }
    for (const v of message.restrictedFields) {
      writer.uint32(122).string(v!);
    }
    if (message.cmekSettings !== undefined) {
      CmekSettings.encode(message.cmekSettings, writer.uint32(154).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LogBucket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogBucket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 11:
          message.retentionDays = reader.int32();
          break;
        case 9:
          message.locked = reader.bool();
          break;
        case 12:
          message.lifecycleState = (reader.int32() as any);
          break;
        case 15:
          message.restrictedFields.push(reader.string());
          break;
        case 19:
          message.cmekSettings = CmekSettings.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LogBucket {
    const obj = createBaseLogBucket();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.createTime)) obj.createTime = new Date(object.createTime);
    if (isSet(object.updateTime)) obj.updateTime = new Date(object.updateTime);
    if (isSet(object.retentionDays)) obj.retentionDays = Number(object.retentionDays);
    if (isSet(object.locked)) obj.locked = Boolean(object.locked);
    if (isSet(object.lifecycleState)) obj.lifecycleState = lifecycleStateFromJSON(object.lifecycleState);
    if (Array.isArray(object?.restrictedFields)) obj.restrictedFields = object.restrictedFields.map((e: any) => String(e));
    if (isSet(object.cmekSettings)) obj.cmekSettings = CmekSettings.fromJSON(object.cmekSettings);
    return obj;
  },
  toJSON(message: LogBucket): JsonSafe<LogBucket> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.createTime !== undefined && (obj.createTime = message.createTime.toISOString());
    message.updateTime !== undefined && (obj.updateTime = message.updateTime.toISOString());
    message.retentionDays !== undefined && (obj.retentionDays = Math.round(message.retentionDays));
    message.locked !== undefined && (obj.locked = message.locked);
    message.lifecycleState !== undefined && (obj.lifecycleState = lifecycleStateToJSON(message.lifecycleState));
    if (message.restrictedFields) {
      obj.restrictedFields = message.restrictedFields.map(e => e);
    } else {
      obj.restrictedFields = [];
    }
    message.cmekSettings !== undefined && (obj.cmekSettings = message.cmekSettings ? CmekSettings.toJSON(message.cmekSettings) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<LogBucket>): LogBucket {
    const message = createBaseLogBucket();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    message.retentionDays = object.retentionDays ?? 0;
    message.locked = object.locked ?? false;
    message.lifecycleState = object.lifecycleState ?? 0;
    message.restrictedFields = object.restrictedFields?.map(e => e) || [];
    if (object.cmekSettings !== undefined && object.cmekSettings !== null) {
      message.cmekSettings = CmekSettings.fromPartial(object.cmekSettings);
    }
    return message;
  },
  fromSDK(object: LogBucketSDKType): LogBucket {
    return {
      name: object?.name,
      description: object?.description,
      createTime: object.create_time ?? undefined,
      updateTime: object.update_time ?? undefined,
      retentionDays: object?.retention_days,
      locked: object?.locked,
      lifecycleState: isSet(object.lifecycle_state) ? lifecycleStateFromJSON(object.lifecycle_state) : -1,
      restrictedFields: Array.isArray(object?.restricted_fields) ? object.restricted_fields.map((e: any) => e) : [],
      cmekSettings: object.cmek_settings ? CmekSettings.fromSDK(object.cmek_settings) : undefined
    };
  },
  fromSDKJSON(object: any): LogBucketSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      create_time: isSet(object.create_time) ? new Date(object.create_time) : undefined,
      update_time: isSet(object.update_time) ? new Date(object.update_time) : undefined,
      retention_days: isSet(object.retention_days) ? Number(object.retention_days) : 0,
      locked: isSet(object.locked) ? Boolean(object.locked) : false,
      lifecycle_state: isSet(object.lifecycle_state) ? lifecycleStateFromJSON(object.lifecycle_state) : -1,
      restricted_fields: Array.isArray(object?.restricted_fields) ? object.restricted_fields.map((e: any) => String(e)) : [],
      cmek_settings: isSet(object.cmek_settings) ? CmekSettings.fromSDKJSON(object.cmek_settings) : undefined
    };
  },
  toSDK(message: LogBucket): LogBucketSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.description = message.description;
    message.createTime !== undefined && (obj.create_time = message.createTime ?? undefined);
    message.updateTime !== undefined && (obj.update_time = message.updateTime ?? undefined);
    obj.retention_days = message.retentionDays;
    obj.locked = message.locked;
    message.lifecycleState !== undefined && (obj.lifecycle_state = lifecycleStateToJSON(message.lifecycleState));
    if (message.restrictedFields) {
      obj.restricted_fields = message.restrictedFields.map(e => e);
    } else {
      obj.restricted_fields = [];
    }
    message.cmekSettings !== undefined && (obj.cmek_settings = message.cmekSettings ? CmekSettings.toSDK(message.cmekSettings) : undefined);
    return obj;
  },
  fromAmino(object: LogBucketAmino): LogBucket {
    const message = createBaseLogBucket();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.create_time !== undefined && object.create_time !== null) {
      message.createTime = fromTimestamp(Timestamp.fromAmino(object.create_time));
    }
    if (object.update_time !== undefined && object.update_time !== null) {
      message.updateTime = fromTimestamp(Timestamp.fromAmino(object.update_time));
    }
    if (object.retention_days !== undefined && object.retention_days !== null) {
      message.retentionDays = object.retention_days;
    }
    if (object.locked !== undefined && object.locked !== null) {
      message.locked = object.locked;
    }
    if (object.lifecycle_state !== undefined && object.lifecycle_state !== null) {
      message.lifecycleState = object.lifecycle_state;
    }
    message.restrictedFields = object.restricted_fields?.map(e => e) || [];
    if (object.cmek_settings !== undefined && object.cmek_settings !== null) {
      message.cmekSettings = CmekSettings.fromAmino(object.cmek_settings);
    }
    return message;
  },
  toAmino(message: LogBucket): LogBucketAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.create_time = message.createTime ? Timestamp.toAmino(toTimestamp(message.createTime)) : undefined;
    obj.update_time = message.updateTime ? Timestamp.toAmino(toTimestamp(message.updateTime)) : undefined;
    obj.retention_days = message.retentionDays === 0 ? undefined : message.retentionDays;
    obj.locked = message.locked === false ? undefined : message.locked;
    obj.lifecycle_state = message.lifecycleState === 0 ? undefined : message.lifecycleState;
    if (message.restrictedFields) {
      obj.restricted_fields = message.restrictedFields.map(e => e);
    } else {
      obj.restricted_fields = message.restrictedFields;
    }
    obj.cmek_settings = message.cmekSettings ? CmekSettings.toAmino(message.cmekSettings) : undefined;
    return obj;
  },
  fromAminoMsg(object: LogBucketAminoMsg): LogBucket {
    return LogBucket.fromAmino(object.value);
  },
  fromProtoMsg(message: LogBucketProtoMsg): LogBucket {
    return LogBucket.decode(message.value);
  },
  toProto(message: LogBucket): Uint8Array {
    return LogBucket.encode(message).finish();
  },
  toProtoMsg(message: LogBucket): LogBucketProtoMsg {
    return {
      typeUrl: "/google.logging.v2.LogBucket",
      value: LogBucket.encode(message).finish()
    };
  },
  registerTypeUrl() {
    CmekSettings.registerTypeUrl();
  }
};
function createBaseLogView(): LogView {
  return {
    name: "",
    description: "",
    createTime: undefined,
    updateTime: undefined,
    filter: ""
  };
}
export const LogView = {
  typeUrl: "/google.logging.v2.LogView",
  is(o: any): o is LogView {
    return o && (o.$typeUrl === LogView.typeUrl || typeof o.name === "string" && typeof o.description === "string" && typeof o.filter === "string");
  },
  isSDK(o: any): o is LogViewSDKType {
    return o && (o.$typeUrl === LogView.typeUrl || typeof o.name === "string" && typeof o.description === "string" && typeof o.filter === "string");
  },
  isAmino(o: any): o is LogViewAmino {
    return o && (o.$typeUrl === LogView.typeUrl || typeof o.name === "string" && typeof o.description === "string" && typeof o.filter === "string");
  },
  encode(message: LogView, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(26).string(message.description);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.filter !== undefined) {
      writer.uint32(58).string(message.filter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LogView {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogView();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.filter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LogView {
    const obj = createBaseLogView();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.createTime)) obj.createTime = new Date(object.createTime);
    if (isSet(object.updateTime)) obj.updateTime = new Date(object.updateTime);
    if (isSet(object.filter)) obj.filter = String(object.filter);
    return obj;
  },
  toJSON(message: LogView): JsonSafe<LogView> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.createTime !== undefined && (obj.createTime = message.createTime.toISOString());
    message.updateTime !== undefined && (obj.updateTime = message.updateTime.toISOString());
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },
  fromPartial(object: DeepPartial<LogView>): LogView {
    const message = createBaseLogView();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    message.filter = object.filter ?? "";
    return message;
  },
  fromSDK(object: LogViewSDKType): LogView {
    return {
      name: object?.name,
      description: object?.description,
      createTime: object.create_time ?? undefined,
      updateTime: object.update_time ?? undefined,
      filter: object?.filter
    };
  },
  fromSDKJSON(object: any): LogViewSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      create_time: isSet(object.create_time) ? new Date(object.create_time) : undefined,
      update_time: isSet(object.update_time) ? new Date(object.update_time) : undefined,
      filter: isSet(object.filter) ? String(object.filter) : ""
    };
  },
  toSDK(message: LogView): LogViewSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.description = message.description;
    message.createTime !== undefined && (obj.create_time = message.createTime ?? undefined);
    message.updateTime !== undefined && (obj.update_time = message.updateTime ?? undefined);
    obj.filter = message.filter;
    return obj;
  },
  fromAmino(object: LogViewAmino): LogView {
    const message = createBaseLogView();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.create_time !== undefined && object.create_time !== null) {
      message.createTime = fromTimestamp(Timestamp.fromAmino(object.create_time));
    }
    if (object.update_time !== undefined && object.update_time !== null) {
      message.updateTime = fromTimestamp(Timestamp.fromAmino(object.update_time));
    }
    if (object.filter !== undefined && object.filter !== null) {
      message.filter = object.filter;
    }
    return message;
  },
  toAmino(message: LogView): LogViewAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.create_time = message.createTime ? Timestamp.toAmino(toTimestamp(message.createTime)) : undefined;
    obj.update_time = message.updateTime ? Timestamp.toAmino(toTimestamp(message.updateTime)) : undefined;
    obj.filter = message.filter === "" ? undefined : message.filter;
    return obj;
  },
  fromAminoMsg(object: LogViewAminoMsg): LogView {
    return LogView.fromAmino(object.value);
  },
  fromProtoMsg(message: LogViewProtoMsg): LogView {
    return LogView.decode(message.value);
  },
  toProto(message: LogView): Uint8Array {
    return LogView.encode(message).finish();
  },
  toProtoMsg(message: LogView): LogViewProtoMsg {
    return {
      typeUrl: "/google.logging.v2.LogView",
      value: LogView.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseLogSink(): LogSink {
  return {
    name: "",
    destination: "",
    filter: "",
    description: "",
    disabled: false,
    exclusions: [],
    outputVersionFormat: 0,
    writerIdentity: "",
    includeChildren: false,
    bigqueryOptions: undefined,
    createTime: undefined,
    updateTime: undefined
  };
}
export const LogSink = {
  typeUrl: "/google.logging.v2.LogSink",
  is(o: any): o is LogSink {
    return o && (o.$typeUrl === LogSink.typeUrl || typeof o.name === "string" && typeof o.destination === "string" && typeof o.filter === "string" && typeof o.description === "string" && typeof o.disabled === "boolean" && Array.isArray(o.exclusions) && (!o.exclusions.length || LogExclusion.is(o.exclusions[0])) && isSet(o.outputVersionFormat) && typeof o.writerIdentity === "string" && typeof o.includeChildren === "boolean");
  },
  isSDK(o: any): o is LogSinkSDKType {
    return o && (o.$typeUrl === LogSink.typeUrl || typeof o.name === "string" && typeof o.destination === "string" && typeof o.filter === "string" && typeof o.description === "string" && typeof o.disabled === "boolean" && Array.isArray(o.exclusions) && (!o.exclusions.length || LogExclusion.isSDK(o.exclusions[0])) && isSet(o.output_version_format) && typeof o.writer_identity === "string" && typeof o.include_children === "boolean");
  },
  isAmino(o: any): o is LogSinkAmino {
    return o && (o.$typeUrl === LogSink.typeUrl || typeof o.name === "string" && typeof o.destination === "string" && typeof o.filter === "string" && typeof o.description === "string" && typeof o.disabled === "boolean" && Array.isArray(o.exclusions) && (!o.exclusions.length || LogExclusion.isAmino(o.exclusions[0])) && isSet(o.output_version_format) && typeof o.writer_identity === "string" && typeof o.include_children === "boolean");
  },
  encode(message: LogSink, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.destination !== undefined) {
      writer.uint32(26).string(message.destination);
    }
    if (message.filter !== undefined) {
      writer.uint32(42).string(message.filter);
    }
    if (message.description !== undefined) {
      writer.uint32(146).string(message.description);
    }
    if (message.disabled !== undefined) {
      writer.uint32(152).bool(message.disabled);
    }
    for (const v of message.exclusions) {
      LogExclusion.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    if (message.outputVersionFormat !== 0) {
      writer.uint32(48).int32(message.outputVersionFormat);
    }
    if (message.writerIdentity !== undefined) {
      writer.uint32(66).string(message.writerIdentity);
    }
    if (message.includeChildren !== undefined) {
      writer.uint32(72).bool(message.includeChildren);
    }
    if (message.bigqueryOptions !== undefined) {
      BigQueryOptions.encode(message.bigqueryOptions, writer.uint32(98).fork()).ldelim();
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(106).fork()).ldelim();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LogSink {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogSink();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 3:
          message.destination = reader.string();
          break;
        case 5:
          message.filter = reader.string();
          break;
        case 18:
          message.description = reader.string();
          break;
        case 19:
          message.disabled = reader.bool();
          break;
        case 16:
          message.exclusions.push(LogExclusion.decode(reader, reader.uint32()));
          break;
        case 6:
          message.outputVersionFormat = (reader.int32() as any);
          break;
        case 8:
          message.writerIdentity = reader.string();
          break;
        case 9:
          message.includeChildren = reader.bool();
          break;
        case 12:
          message.bigqueryOptions = BigQueryOptions.decode(reader, reader.uint32());
          break;
        case 13:
          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 14:
          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LogSink {
    const obj = createBaseLogSink();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.destination)) obj.destination = String(object.destination);
    if (isSet(object.filter)) obj.filter = String(object.filter);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.disabled)) obj.disabled = Boolean(object.disabled);
    if (Array.isArray(object?.exclusions)) obj.exclusions = object.exclusions.map((e: any) => LogExclusion.fromJSON(e));
    if (isSet(object.outputVersionFormat)) obj.outputVersionFormat = logSink_VersionFormatFromJSON(object.outputVersionFormat);
    if (isSet(object.writerIdentity)) obj.writerIdentity = String(object.writerIdentity);
    if (isSet(object.includeChildren)) obj.includeChildren = Boolean(object.includeChildren);
    if (isSet(object.bigqueryOptions)) obj.bigqueryOptions = BigQueryOptions.fromJSON(object.bigqueryOptions);
    if (isSet(object.createTime)) obj.createTime = new Date(object.createTime);
    if (isSet(object.updateTime)) obj.updateTime = new Date(object.updateTime);
    return obj;
  },
  toJSON(message: LogSink): JsonSafe<LogSink> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.destination !== undefined && (obj.destination = message.destination);
    message.filter !== undefined && (obj.filter = message.filter);
    message.description !== undefined && (obj.description = message.description);
    message.disabled !== undefined && (obj.disabled = message.disabled);
    if (message.exclusions) {
      obj.exclusions = message.exclusions.map(e => e ? LogExclusion.toJSON(e) : undefined);
    } else {
      obj.exclusions = [];
    }
    message.outputVersionFormat !== undefined && (obj.outputVersionFormat = logSink_VersionFormatToJSON(message.outputVersionFormat));
    message.writerIdentity !== undefined && (obj.writerIdentity = message.writerIdentity);
    message.includeChildren !== undefined && (obj.includeChildren = message.includeChildren);
    message.bigqueryOptions !== undefined && (obj.bigqueryOptions = message.bigqueryOptions ? BigQueryOptions.toJSON(message.bigqueryOptions) : undefined);
    message.createTime !== undefined && (obj.createTime = message.createTime.toISOString());
    message.updateTime !== undefined && (obj.updateTime = message.updateTime.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<LogSink>): LogSink {
    const message = createBaseLogSink();
    message.name = object.name ?? "";
    message.destination = object.destination ?? "";
    message.filter = object.filter ?? "";
    message.description = object.description ?? "";
    message.disabled = object.disabled ?? false;
    message.exclusions = object.exclusions?.map(e => LogExclusion.fromPartial(e)) || [];
    message.outputVersionFormat = object.outputVersionFormat ?? 0;
    message.writerIdentity = object.writerIdentity ?? "";
    message.includeChildren = object.includeChildren ?? false;
    if (object.bigqueryOptions !== undefined && object.bigqueryOptions !== null) {
      message.bigqueryOptions = BigQueryOptions.fromPartial(object.bigqueryOptions);
    }
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    return message;
  },
  fromSDK(object: LogSinkSDKType): LogSink {
    return {
      name: object?.name,
      destination: object?.destination,
      filter: object?.filter,
      description: object?.description,
      disabled: object?.disabled,
      exclusions: Array.isArray(object?.exclusions) ? object.exclusions.map((e: any) => LogExclusion.fromSDK(e)) : [],
      outputVersionFormat: isSet(object.output_version_format) ? logSink_VersionFormatFromJSON(object.output_version_format) : -1,
      writerIdentity: object?.writer_identity,
      includeChildren: object?.include_children,
      bigqueryOptions: object.bigquery_options ? BigQueryOptions.fromSDK(object.bigquery_options) : undefined,
      createTime: object.create_time ?? undefined,
      updateTime: object.update_time ?? undefined
    };
  },
  fromSDKJSON(object: any): LogSinkSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      destination: isSet(object.destination) ? String(object.destination) : "",
      filter: isSet(object.filter) ? String(object.filter) : "",
      description: isSet(object.description) ? String(object.description) : "",
      disabled: isSet(object.disabled) ? Boolean(object.disabled) : false,
      exclusions: Array.isArray(object?.exclusions) ? object.exclusions.map((e: any) => LogExclusion.fromSDKJSON(e)) : [],
      output_version_format: isSet(object.output_version_format) ? logSink_VersionFormatFromJSON(object.output_version_format) : -1,
      writer_identity: isSet(object.writer_identity) ? String(object.writer_identity) : "",
      include_children: isSet(object.include_children) ? Boolean(object.include_children) : false,
      bigquery_options: isSet(object.bigquery_options) ? BigQueryOptions.fromSDKJSON(object.bigquery_options) : undefined,
      create_time: isSet(object.create_time) ? new Date(object.create_time) : undefined,
      update_time: isSet(object.update_time) ? new Date(object.update_time) : undefined
    };
  },
  toSDK(message: LogSink): LogSinkSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.destination = message.destination;
    obj.filter = message.filter;
    obj.description = message.description;
    obj.disabled = message.disabled;
    if (message.exclusions) {
      obj.exclusions = message.exclusions.map(e => e ? LogExclusion.toSDK(e) : undefined);
    } else {
      obj.exclusions = [];
    }
    message.outputVersionFormat !== undefined && (obj.output_version_format = logSink_VersionFormatToJSON(message.outputVersionFormat));
    obj.writer_identity = message.writerIdentity;
    obj.include_children = message.includeChildren;
    message.bigqueryOptions !== undefined && (obj.bigquery_options = message.bigqueryOptions ? BigQueryOptions.toSDK(message.bigqueryOptions) : undefined);
    message.createTime !== undefined && (obj.create_time = message.createTime ?? undefined);
    message.updateTime !== undefined && (obj.update_time = message.updateTime ?? undefined);
    return obj;
  },
  fromAmino(object: LogSinkAmino): LogSink {
    const message = createBaseLogSink();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.destination !== undefined && object.destination !== null) {
      message.destination = object.destination;
    }
    if (object.filter !== undefined && object.filter !== null) {
      message.filter = object.filter;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.disabled !== undefined && object.disabled !== null) {
      message.disabled = object.disabled;
    }
    message.exclusions = object.exclusions?.map(e => LogExclusion.fromAmino(e)) || [];
    if (object.output_version_format !== undefined && object.output_version_format !== null) {
      message.outputVersionFormat = object.output_version_format;
    }
    if (object.writer_identity !== undefined && object.writer_identity !== null) {
      message.writerIdentity = object.writer_identity;
    }
    if (object.include_children !== undefined && object.include_children !== null) {
      message.includeChildren = object.include_children;
    }
    if (object.bigquery_options !== undefined && object.bigquery_options !== null) {
      message.bigqueryOptions = BigQueryOptions.fromAmino(object.bigquery_options);
    }
    if (object.create_time !== undefined && object.create_time !== null) {
      message.createTime = fromTimestamp(Timestamp.fromAmino(object.create_time));
    }
    if (object.update_time !== undefined && object.update_time !== null) {
      message.updateTime = fromTimestamp(Timestamp.fromAmino(object.update_time));
    }
    return message;
  },
  toAmino(message: LogSink): LogSinkAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.destination = message.destination === "" ? undefined : message.destination;
    obj.filter = message.filter === "" ? undefined : message.filter;
    obj.description = message.description === "" ? undefined : message.description;
    obj.disabled = message.disabled === false ? undefined : message.disabled;
    if (message.exclusions) {
      obj.exclusions = message.exclusions.map(e => e ? LogExclusion.toAmino(e) : undefined);
    } else {
      obj.exclusions = message.exclusions;
    }
    obj.output_version_format = message.outputVersionFormat === 0 ? undefined : message.outputVersionFormat;
    obj.writer_identity = message.writerIdentity === "" ? undefined : message.writerIdentity;
    obj.include_children = message.includeChildren === false ? undefined : message.includeChildren;
    obj.bigquery_options = message.bigqueryOptions ? BigQueryOptions.toAmino(message.bigqueryOptions) : undefined;
    obj.create_time = message.createTime ? Timestamp.toAmino(toTimestamp(message.createTime)) : undefined;
    obj.update_time = message.updateTime ? Timestamp.toAmino(toTimestamp(message.updateTime)) : undefined;
    return obj;
  },
  fromAminoMsg(object: LogSinkAminoMsg): LogSink {
    return LogSink.fromAmino(object.value);
  },
  fromProtoMsg(message: LogSinkProtoMsg): LogSink {
    return LogSink.decode(message.value);
  },
  toProto(message: LogSink): Uint8Array {
    return LogSink.encode(message).finish();
  },
  toProtoMsg(message: LogSink): LogSinkProtoMsg {
    return {
      typeUrl: "/google.logging.v2.LogSink",
      value: LogSink.encode(message).finish()
    };
  },
  registerTypeUrl() {
    LogExclusion.registerTypeUrl();
    BigQueryOptions.registerTypeUrl();
  }
};
function createBaseBigQueryOptions(): BigQueryOptions {
  return {
    usePartitionedTables: false,
    usesTimestampColumnPartitioning: false
  };
}
export const BigQueryOptions = {
  typeUrl: "/google.logging.v2.BigQueryOptions",
  is(o: any): o is BigQueryOptions {
    return o && (o.$typeUrl === BigQueryOptions.typeUrl || typeof o.usePartitionedTables === "boolean" && typeof o.usesTimestampColumnPartitioning === "boolean");
  },
  isSDK(o: any): o is BigQueryOptionsSDKType {
    return o && (o.$typeUrl === BigQueryOptions.typeUrl || typeof o.use_partitioned_tables === "boolean" && typeof o.uses_timestamp_column_partitioning === "boolean");
  },
  isAmino(o: any): o is BigQueryOptionsAmino {
    return o && (o.$typeUrl === BigQueryOptions.typeUrl || typeof o.use_partitioned_tables === "boolean" && typeof o.uses_timestamp_column_partitioning === "boolean");
  },
  encode(message: BigQueryOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.usePartitionedTables !== undefined) {
      writer.uint32(8).bool(message.usePartitionedTables);
    }
    if (message.usesTimestampColumnPartitioning !== undefined) {
      writer.uint32(24).bool(message.usesTimestampColumnPartitioning);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BigQueryOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBigQueryOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.usePartitionedTables = reader.bool();
          break;
        case 3:
          message.usesTimestampColumnPartitioning = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BigQueryOptions {
    const obj = createBaseBigQueryOptions();
    if (isSet(object.usePartitionedTables)) obj.usePartitionedTables = Boolean(object.usePartitionedTables);
    if (isSet(object.usesTimestampColumnPartitioning)) obj.usesTimestampColumnPartitioning = Boolean(object.usesTimestampColumnPartitioning);
    return obj;
  },
  toJSON(message: BigQueryOptions): JsonSafe<BigQueryOptions> {
    const obj: any = {};
    message.usePartitionedTables !== undefined && (obj.usePartitionedTables = message.usePartitionedTables);
    message.usesTimestampColumnPartitioning !== undefined && (obj.usesTimestampColumnPartitioning = message.usesTimestampColumnPartitioning);
    return obj;
  },
  fromPartial(object: DeepPartial<BigQueryOptions>): BigQueryOptions {
    const message = createBaseBigQueryOptions();
    message.usePartitionedTables = object.usePartitionedTables ?? false;
    message.usesTimestampColumnPartitioning = object.usesTimestampColumnPartitioning ?? false;
    return message;
  },
  fromSDK(object: BigQueryOptionsSDKType): BigQueryOptions {
    return {
      usePartitionedTables: object?.use_partitioned_tables,
      usesTimestampColumnPartitioning: object?.uses_timestamp_column_partitioning
    };
  },
  fromSDKJSON(object: any): BigQueryOptionsSDKType {
    return {
      use_partitioned_tables: isSet(object.use_partitioned_tables) ? Boolean(object.use_partitioned_tables) : false,
      uses_timestamp_column_partitioning: isSet(object.uses_timestamp_column_partitioning) ? Boolean(object.uses_timestamp_column_partitioning) : false
    };
  },
  toSDK(message: BigQueryOptions): BigQueryOptionsSDKType {
    const obj: any = {};
    obj.use_partitioned_tables = message.usePartitionedTables;
    obj.uses_timestamp_column_partitioning = message.usesTimestampColumnPartitioning;
    return obj;
  },
  fromAmino(object: BigQueryOptionsAmino): BigQueryOptions {
    const message = createBaseBigQueryOptions();
    if (object.use_partitioned_tables !== undefined && object.use_partitioned_tables !== null) {
      message.usePartitionedTables = object.use_partitioned_tables;
    }
    if (object.uses_timestamp_column_partitioning !== undefined && object.uses_timestamp_column_partitioning !== null) {
      message.usesTimestampColumnPartitioning = object.uses_timestamp_column_partitioning;
    }
    return message;
  },
  toAmino(message: BigQueryOptions): BigQueryOptionsAmino {
    const obj: any = {};
    obj.use_partitioned_tables = message.usePartitionedTables === false ? undefined : message.usePartitionedTables;
    obj.uses_timestamp_column_partitioning = message.usesTimestampColumnPartitioning === false ? undefined : message.usesTimestampColumnPartitioning;
    return obj;
  },
  fromAminoMsg(object: BigQueryOptionsAminoMsg): BigQueryOptions {
    return BigQueryOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: BigQueryOptionsProtoMsg): BigQueryOptions {
    return BigQueryOptions.decode(message.value);
  },
  toProto(message: BigQueryOptions): Uint8Array {
    return BigQueryOptions.encode(message).finish();
  },
  toProtoMsg(message: BigQueryOptions): BigQueryOptionsProtoMsg {
    return {
      typeUrl: "/google.logging.v2.BigQueryOptions",
      value: BigQueryOptions.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseListBucketsRequest(): ListBucketsRequest {
  return {
    parent: "",
    pageToken: "",
    pageSize: 0
  };
}
export const ListBucketsRequest = {
  typeUrl: "/google.logging.v2.ListBucketsRequest",
  is(o: any): o is ListBucketsRequest {
    return o && (o.$typeUrl === ListBucketsRequest.typeUrl || typeof o.parent === "string" && typeof o.pageToken === "string" && typeof o.pageSize === "number");
  },
  isSDK(o: any): o is ListBucketsRequestSDKType {
    return o && (o.$typeUrl === ListBucketsRequest.typeUrl || typeof o.parent === "string" && typeof o.page_token === "string" && typeof o.page_size === "number");
  },
  isAmino(o: any): o is ListBucketsRequestAmino {
    return o && (o.$typeUrl === ListBucketsRequest.typeUrl || typeof o.parent === "string" && typeof o.page_token === "string" && typeof o.page_size === "number");
  },
  encode(message: ListBucketsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parent !== undefined) {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageToken !== undefined) {
      writer.uint32(18).string(message.pageToken);
    }
    if (message.pageSize !== undefined) {
      writer.uint32(24).int32(message.pageSize);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListBucketsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListBucketsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.pageToken = reader.string();
          break;
        case 3:
          message.pageSize = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListBucketsRequest {
    const obj = createBaseListBucketsRequest();
    if (isSet(object.parent)) obj.parent = String(object.parent);
    if (isSet(object.pageToken)) obj.pageToken = String(object.pageToken);
    if (isSet(object.pageSize)) obj.pageSize = Number(object.pageSize);
    return obj;
  },
  toJSON(message: ListBucketsRequest): JsonSafe<ListBucketsRequest> {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    return obj;
  },
  fromPartial(object: DeepPartial<ListBucketsRequest>): ListBucketsRequest {
    const message = createBaseListBucketsRequest();
    message.parent = object.parent ?? "";
    message.pageToken = object.pageToken ?? "";
    message.pageSize = object.pageSize ?? 0;
    return message;
  },
  fromSDK(object: ListBucketsRequestSDKType): ListBucketsRequest {
    return {
      parent: object?.parent,
      pageToken: object?.page_token,
      pageSize: object?.page_size
    };
  },
  fromSDKJSON(object: any): ListBucketsRequestSDKType {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      page_token: isSet(object.page_token) ? String(object.page_token) : "",
      page_size: isSet(object.page_size) ? Number(object.page_size) : 0
    };
  },
  toSDK(message: ListBucketsRequest): ListBucketsRequestSDKType {
    const obj: any = {};
    obj.parent = message.parent;
    obj.page_token = message.pageToken;
    obj.page_size = message.pageSize;
    return obj;
  },
  fromAmino(object: ListBucketsRequestAmino): ListBucketsRequest {
    const message = createBaseListBucketsRequest();
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    }
    if (object.page_token !== undefined && object.page_token !== null) {
      message.pageToken = object.page_token;
    }
    if (object.page_size !== undefined && object.page_size !== null) {
      message.pageSize = object.page_size;
    }
    return message;
  },
  toAmino(message: ListBucketsRequest): ListBucketsRequestAmino {
    const obj: any = {};
    obj.parent = message.parent === "" ? undefined : message.parent;
    obj.page_token = message.pageToken === "" ? undefined : message.pageToken;
    obj.page_size = message.pageSize === 0 ? undefined : message.pageSize;
    return obj;
  },
  fromAminoMsg(object: ListBucketsRequestAminoMsg): ListBucketsRequest {
    return ListBucketsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ListBucketsRequestProtoMsg): ListBucketsRequest {
    return ListBucketsRequest.decode(message.value);
  },
  toProto(message: ListBucketsRequest): Uint8Array {
    return ListBucketsRequest.encode(message).finish();
  },
  toProtoMsg(message: ListBucketsRequest): ListBucketsRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.ListBucketsRequest",
      value: ListBucketsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseListBucketsResponse(): ListBucketsResponse {
  return {
    buckets: [],
    nextPageToken: ""
  };
}
export const ListBucketsResponse = {
  typeUrl: "/google.logging.v2.ListBucketsResponse",
  is(o: any): o is ListBucketsResponse {
    return o && (o.$typeUrl === ListBucketsResponse.typeUrl || Array.isArray(o.buckets) && (!o.buckets.length || LogBucket.is(o.buckets[0])) && typeof o.nextPageToken === "string");
  },
  isSDK(o: any): o is ListBucketsResponseSDKType {
    return o && (o.$typeUrl === ListBucketsResponse.typeUrl || Array.isArray(o.buckets) && (!o.buckets.length || LogBucket.isSDK(o.buckets[0])) && typeof o.next_page_token === "string");
  },
  isAmino(o: any): o is ListBucketsResponseAmino {
    return o && (o.$typeUrl === ListBucketsResponse.typeUrl || Array.isArray(o.buckets) && (!o.buckets.length || LogBucket.isAmino(o.buckets[0])) && typeof o.next_page_token === "string");
  },
  encode(message: ListBucketsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.buckets) {
      LogBucket.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== undefined) {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListBucketsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListBucketsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buckets.push(LogBucket.decode(reader, reader.uint32()));
          break;
        case 2:
          message.nextPageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListBucketsResponse {
    const obj = createBaseListBucketsResponse();
    if (Array.isArray(object?.buckets)) obj.buckets = object.buckets.map((e: any) => LogBucket.fromJSON(e));
    if (isSet(object.nextPageToken)) obj.nextPageToken = String(object.nextPageToken);
    return obj;
  },
  toJSON(message: ListBucketsResponse): JsonSafe<ListBucketsResponse> {
    const obj: any = {};
    if (message.buckets) {
      obj.buckets = message.buckets.map(e => e ? LogBucket.toJSON(e) : undefined);
    } else {
      obj.buckets = [];
    }
    message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
    return obj;
  },
  fromPartial(object: DeepPartial<ListBucketsResponse>): ListBucketsResponse {
    const message = createBaseListBucketsResponse();
    message.buckets = object.buckets?.map(e => LogBucket.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
  fromSDK(object: ListBucketsResponseSDKType): ListBucketsResponse {
    return {
      buckets: Array.isArray(object?.buckets) ? object.buckets.map((e: any) => LogBucket.fromSDK(e)) : [],
      nextPageToken: object?.next_page_token
    };
  },
  fromSDKJSON(object: any): ListBucketsResponseSDKType {
    return {
      buckets: Array.isArray(object?.buckets) ? object.buckets.map((e: any) => LogBucket.fromSDKJSON(e)) : [],
      next_page_token: isSet(object.next_page_token) ? String(object.next_page_token) : ""
    };
  },
  toSDK(message: ListBucketsResponse): ListBucketsResponseSDKType {
    const obj: any = {};
    if (message.buckets) {
      obj.buckets = message.buckets.map(e => e ? LogBucket.toSDK(e) : undefined);
    } else {
      obj.buckets = [];
    }
    obj.next_page_token = message.nextPageToken;
    return obj;
  },
  fromAmino(object: ListBucketsResponseAmino): ListBucketsResponse {
    const message = createBaseListBucketsResponse();
    message.buckets = object.buckets?.map(e => LogBucket.fromAmino(e)) || [];
    if (object.next_page_token !== undefined && object.next_page_token !== null) {
      message.nextPageToken = object.next_page_token;
    }
    return message;
  },
  toAmino(message: ListBucketsResponse): ListBucketsResponseAmino {
    const obj: any = {};
    if (message.buckets) {
      obj.buckets = message.buckets.map(e => e ? LogBucket.toAmino(e) : undefined);
    } else {
      obj.buckets = message.buckets;
    }
    obj.next_page_token = message.nextPageToken === "" ? undefined : message.nextPageToken;
    return obj;
  },
  fromAminoMsg(object: ListBucketsResponseAminoMsg): ListBucketsResponse {
    return ListBucketsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ListBucketsResponseProtoMsg): ListBucketsResponse {
    return ListBucketsResponse.decode(message.value);
  },
  toProto(message: ListBucketsResponse): Uint8Array {
    return ListBucketsResponse.encode(message).finish();
  },
  toProtoMsg(message: ListBucketsResponse): ListBucketsResponseProtoMsg {
    return {
      typeUrl: "/google.logging.v2.ListBucketsResponse",
      value: ListBucketsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    LogBucket.registerTypeUrl();
  }
};
function createBaseCreateBucketRequest(): CreateBucketRequest {
  return {
    parent: "",
    bucketId: "",
    bucket: undefined
  };
}
export const CreateBucketRequest = {
  typeUrl: "/google.logging.v2.CreateBucketRequest",
  is(o: any): o is CreateBucketRequest {
    return o && (o.$typeUrl === CreateBucketRequest.typeUrl || typeof o.parent === "string" && typeof o.bucketId === "string");
  },
  isSDK(o: any): o is CreateBucketRequestSDKType {
    return o && (o.$typeUrl === CreateBucketRequest.typeUrl || typeof o.parent === "string" && typeof o.bucket_id === "string");
  },
  isAmino(o: any): o is CreateBucketRequestAmino {
    return o && (o.$typeUrl === CreateBucketRequest.typeUrl || typeof o.parent === "string" && typeof o.bucket_id === "string");
  },
  encode(message: CreateBucketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parent !== undefined) {
      writer.uint32(10).string(message.parent);
    }
    if (message.bucketId !== undefined) {
      writer.uint32(18).string(message.bucketId);
    }
    if (message.bucket !== undefined) {
      LogBucket.encode(message.bucket, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CreateBucketRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateBucketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.bucketId = reader.string();
          break;
        case 3:
          message.bucket = LogBucket.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CreateBucketRequest {
    const obj = createBaseCreateBucketRequest();
    if (isSet(object.parent)) obj.parent = String(object.parent);
    if (isSet(object.bucketId)) obj.bucketId = String(object.bucketId);
    if (isSet(object.bucket)) obj.bucket = LogBucket.fromJSON(object.bucket);
    return obj;
  },
  toJSON(message: CreateBucketRequest): JsonSafe<CreateBucketRequest> {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.bucketId !== undefined && (obj.bucketId = message.bucketId);
    message.bucket !== undefined && (obj.bucket = message.bucket ? LogBucket.toJSON(message.bucket) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<CreateBucketRequest>): CreateBucketRequest {
    const message = createBaseCreateBucketRequest();
    message.parent = object.parent ?? "";
    message.bucketId = object.bucketId ?? "";
    if (object.bucket !== undefined && object.bucket !== null) {
      message.bucket = LogBucket.fromPartial(object.bucket);
    }
    return message;
  },
  fromSDK(object: CreateBucketRequestSDKType): CreateBucketRequest {
    return {
      parent: object?.parent,
      bucketId: object?.bucket_id,
      bucket: object.bucket ? LogBucket.fromSDK(object.bucket) : undefined
    };
  },
  fromSDKJSON(object: any): CreateBucketRequestSDKType {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      bucket_id: isSet(object.bucket_id) ? String(object.bucket_id) : "",
      bucket: isSet(object.bucket) ? LogBucket.fromSDKJSON(object.bucket) : undefined
    };
  },
  toSDK(message: CreateBucketRequest): CreateBucketRequestSDKType {
    const obj: any = {};
    obj.parent = message.parent;
    obj.bucket_id = message.bucketId;
    message.bucket !== undefined && (obj.bucket = message.bucket ? LogBucket.toSDK(message.bucket) : undefined);
    return obj;
  },
  fromAmino(object: CreateBucketRequestAmino): CreateBucketRequest {
    const message = createBaseCreateBucketRequest();
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    }
    if (object.bucket_id !== undefined && object.bucket_id !== null) {
      message.bucketId = object.bucket_id;
    }
    if (object.bucket !== undefined && object.bucket !== null) {
      message.bucket = LogBucket.fromAmino(object.bucket);
    }
    return message;
  },
  toAmino(message: CreateBucketRequest): CreateBucketRequestAmino {
    const obj: any = {};
    obj.parent = message.parent === "" ? undefined : message.parent;
    obj.bucket_id = message.bucketId === "" ? undefined : message.bucketId;
    obj.bucket = message.bucket ? LogBucket.toAmino(message.bucket) : undefined;
    return obj;
  },
  fromAminoMsg(object: CreateBucketRequestAminoMsg): CreateBucketRequest {
    return CreateBucketRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: CreateBucketRequestProtoMsg): CreateBucketRequest {
    return CreateBucketRequest.decode(message.value);
  },
  toProto(message: CreateBucketRequest): Uint8Array {
    return CreateBucketRequest.encode(message).finish();
  },
  toProtoMsg(message: CreateBucketRequest): CreateBucketRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.CreateBucketRequest",
      value: CreateBucketRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    LogBucket.registerTypeUrl();
  }
};
function createBaseUpdateBucketRequest(): UpdateBucketRequest {
  return {
    name: "",
    bucket: undefined,
    updateMask: undefined
  };
}
export const UpdateBucketRequest = {
  typeUrl: "/google.logging.v2.UpdateBucketRequest",
  is(o: any): o is UpdateBucketRequest {
    return o && (o.$typeUrl === UpdateBucketRequest.typeUrl || typeof o.name === "string");
  },
  isSDK(o: any): o is UpdateBucketRequestSDKType {
    return o && (o.$typeUrl === UpdateBucketRequest.typeUrl || typeof o.name === "string");
  },
  isAmino(o: any): o is UpdateBucketRequestAmino {
    return o && (o.$typeUrl === UpdateBucketRequest.typeUrl || typeof o.name === "string");
  },
  encode(message: UpdateBucketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.bucket !== undefined) {
      LogBucket.encode(message.bucket, writer.uint32(18).fork()).ldelim();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateBucketRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateBucketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.bucket = LogBucket.decode(reader, reader.uint32());
          break;
        case 4:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpdateBucketRequest {
    const obj = createBaseUpdateBucketRequest();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.bucket)) obj.bucket = LogBucket.fromJSON(object.bucket);
    if (isSet(object.updateMask)) obj.updateMask = FieldMask.fromJSON(object.updateMask);
    return obj;
  },
  toJSON(message: UpdateBucketRequest): JsonSafe<UpdateBucketRequest> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.bucket !== undefined && (obj.bucket = message.bucket ? LogBucket.toJSON(message.bucket) : undefined);
    message.updateMask !== undefined && (obj.updateMask = message.updateMask ? FieldMask.toJSON(message.updateMask) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<UpdateBucketRequest>): UpdateBucketRequest {
    const message = createBaseUpdateBucketRequest();
    message.name = object.name ?? "";
    if (object.bucket !== undefined && object.bucket !== null) {
      message.bucket = LogBucket.fromPartial(object.bucket);
    }
    if (object.updateMask !== undefined && object.updateMask !== null) {
      message.updateMask = FieldMask.fromPartial(object.updateMask);
    }
    return message;
  },
  fromSDK(object: UpdateBucketRequestSDKType): UpdateBucketRequest {
    return {
      name: object?.name,
      bucket: object.bucket ? LogBucket.fromSDK(object.bucket) : undefined,
      updateMask: object.update_mask ? FieldMask.fromSDK(object.update_mask) : undefined
    };
  },
  fromSDKJSON(object: any): UpdateBucketRequestSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      bucket: isSet(object.bucket) ? LogBucket.fromSDKJSON(object.bucket) : undefined,
      update_mask: isSet(object.update_mask) ? FieldMask.fromSDKJSON(object.update_mask) : undefined
    };
  },
  toSDK(message: UpdateBucketRequest): UpdateBucketRequestSDKType {
    const obj: any = {};
    obj.name = message.name;
    message.bucket !== undefined && (obj.bucket = message.bucket ? LogBucket.toSDK(message.bucket) : undefined);
    message.updateMask !== undefined && (obj.update_mask = message.updateMask ? FieldMask.toSDK(message.updateMask) : undefined);
    return obj;
  },
  fromAmino(object: UpdateBucketRequestAmino): UpdateBucketRequest {
    const message = createBaseUpdateBucketRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.bucket !== undefined && object.bucket !== null) {
      message.bucket = LogBucket.fromAmino(object.bucket);
    }
    if (object.update_mask !== undefined && object.update_mask !== null) {
      message.updateMask = FieldMask.fromAmino(object.update_mask);
    }
    return message;
  },
  toAmino(message: UpdateBucketRequest): UpdateBucketRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.bucket = message.bucket ? LogBucket.toAmino(message.bucket) : undefined;
    obj.update_mask = message.updateMask ? FieldMask.toAmino(message.updateMask) : undefined;
    return obj;
  },
  fromAminoMsg(object: UpdateBucketRequestAminoMsg): UpdateBucketRequest {
    return UpdateBucketRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateBucketRequestProtoMsg): UpdateBucketRequest {
    return UpdateBucketRequest.decode(message.value);
  },
  toProto(message: UpdateBucketRequest): Uint8Array {
    return UpdateBucketRequest.encode(message).finish();
  },
  toProtoMsg(message: UpdateBucketRequest): UpdateBucketRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.UpdateBucketRequest",
      value: UpdateBucketRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    LogBucket.registerTypeUrl();
    FieldMask.registerTypeUrl();
  }
};
function createBaseGetBucketRequest(): GetBucketRequest {
  return {
    name: ""
  };
}
export const GetBucketRequest = {
  typeUrl: "/google.logging.v2.GetBucketRequest",
  is(o: any): o is GetBucketRequest {
    return o && (o.$typeUrl === GetBucketRequest.typeUrl || typeof o.name === "string");
  },
  isSDK(o: any): o is GetBucketRequestSDKType {
    return o && (o.$typeUrl === GetBucketRequest.typeUrl || typeof o.name === "string");
  },
  isAmino(o: any): o is GetBucketRequestAmino {
    return o && (o.$typeUrl === GetBucketRequest.typeUrl || typeof o.name === "string");
  },
  encode(message: GetBucketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetBucketRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBucketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetBucketRequest {
    const obj = createBaseGetBucketRequest();
    if (isSet(object.name)) obj.name = String(object.name);
    return obj;
  },
  toJSON(message: GetBucketRequest): JsonSafe<GetBucketRequest> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial(object: DeepPartial<GetBucketRequest>): GetBucketRequest {
    const message = createBaseGetBucketRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromSDK(object: GetBucketRequestSDKType): GetBucketRequest {
    return {
      name: object?.name
    };
  },
  fromSDKJSON(object: any): GetBucketRequestSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toSDK(message: GetBucketRequest): GetBucketRequestSDKType {
    const obj: any = {};
    obj.name = message.name;
    return obj;
  },
  fromAmino(object: GetBucketRequestAmino): GetBucketRequest {
    const message = createBaseGetBucketRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: GetBucketRequest): GetBucketRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: GetBucketRequestAminoMsg): GetBucketRequest {
    return GetBucketRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: GetBucketRequestProtoMsg): GetBucketRequest {
    return GetBucketRequest.decode(message.value);
  },
  toProto(message: GetBucketRequest): Uint8Array {
    return GetBucketRequest.encode(message).finish();
  },
  toProtoMsg(message: GetBucketRequest): GetBucketRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.GetBucketRequest",
      value: GetBucketRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDeleteBucketRequest(): DeleteBucketRequest {
  return {
    name: ""
  };
}
export const DeleteBucketRequest = {
  typeUrl: "/google.logging.v2.DeleteBucketRequest",
  is(o: any): o is DeleteBucketRequest {
    return o && (o.$typeUrl === DeleteBucketRequest.typeUrl || typeof o.name === "string");
  },
  isSDK(o: any): o is DeleteBucketRequestSDKType {
    return o && (o.$typeUrl === DeleteBucketRequest.typeUrl || typeof o.name === "string");
  },
  isAmino(o: any): o is DeleteBucketRequestAmino {
    return o && (o.$typeUrl === DeleteBucketRequest.typeUrl || typeof o.name === "string");
  },
  encode(message: DeleteBucketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DeleteBucketRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteBucketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DeleteBucketRequest {
    const obj = createBaseDeleteBucketRequest();
    if (isSet(object.name)) obj.name = String(object.name);
    return obj;
  },
  toJSON(message: DeleteBucketRequest): JsonSafe<DeleteBucketRequest> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial(object: DeepPartial<DeleteBucketRequest>): DeleteBucketRequest {
    const message = createBaseDeleteBucketRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromSDK(object: DeleteBucketRequestSDKType): DeleteBucketRequest {
    return {
      name: object?.name
    };
  },
  fromSDKJSON(object: any): DeleteBucketRequestSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toSDK(message: DeleteBucketRequest): DeleteBucketRequestSDKType {
    const obj: any = {};
    obj.name = message.name;
    return obj;
  },
  fromAmino(object: DeleteBucketRequestAmino): DeleteBucketRequest {
    const message = createBaseDeleteBucketRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: DeleteBucketRequest): DeleteBucketRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: DeleteBucketRequestAminoMsg): DeleteBucketRequest {
    return DeleteBucketRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: DeleteBucketRequestProtoMsg): DeleteBucketRequest {
    return DeleteBucketRequest.decode(message.value);
  },
  toProto(message: DeleteBucketRequest): Uint8Array {
    return DeleteBucketRequest.encode(message).finish();
  },
  toProtoMsg(message: DeleteBucketRequest): DeleteBucketRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.DeleteBucketRequest",
      value: DeleteBucketRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseUndeleteBucketRequest(): UndeleteBucketRequest {
  return {
    name: ""
  };
}
export const UndeleteBucketRequest = {
  typeUrl: "/google.logging.v2.UndeleteBucketRequest",
  is(o: any): o is UndeleteBucketRequest {
    return o && (o.$typeUrl === UndeleteBucketRequest.typeUrl || typeof o.name === "string");
  },
  isSDK(o: any): o is UndeleteBucketRequestSDKType {
    return o && (o.$typeUrl === UndeleteBucketRequest.typeUrl || typeof o.name === "string");
  },
  isAmino(o: any): o is UndeleteBucketRequestAmino {
    return o && (o.$typeUrl === UndeleteBucketRequest.typeUrl || typeof o.name === "string");
  },
  encode(message: UndeleteBucketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UndeleteBucketRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndeleteBucketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UndeleteBucketRequest {
    const obj = createBaseUndeleteBucketRequest();
    if (isSet(object.name)) obj.name = String(object.name);
    return obj;
  },
  toJSON(message: UndeleteBucketRequest): JsonSafe<UndeleteBucketRequest> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial(object: DeepPartial<UndeleteBucketRequest>): UndeleteBucketRequest {
    const message = createBaseUndeleteBucketRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromSDK(object: UndeleteBucketRequestSDKType): UndeleteBucketRequest {
    return {
      name: object?.name
    };
  },
  fromSDKJSON(object: any): UndeleteBucketRequestSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toSDK(message: UndeleteBucketRequest): UndeleteBucketRequestSDKType {
    const obj: any = {};
    obj.name = message.name;
    return obj;
  },
  fromAmino(object: UndeleteBucketRequestAmino): UndeleteBucketRequest {
    const message = createBaseUndeleteBucketRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: UndeleteBucketRequest): UndeleteBucketRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: UndeleteBucketRequestAminoMsg): UndeleteBucketRequest {
    return UndeleteBucketRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: UndeleteBucketRequestProtoMsg): UndeleteBucketRequest {
    return UndeleteBucketRequest.decode(message.value);
  },
  toProto(message: UndeleteBucketRequest): Uint8Array {
    return UndeleteBucketRequest.encode(message).finish();
  },
  toProtoMsg(message: UndeleteBucketRequest): UndeleteBucketRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.UndeleteBucketRequest",
      value: UndeleteBucketRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseListViewsRequest(): ListViewsRequest {
  return {
    parent: "",
    pageToken: "",
    pageSize: 0
  };
}
export const ListViewsRequest = {
  typeUrl: "/google.logging.v2.ListViewsRequest",
  is(o: any): o is ListViewsRequest {
    return o && (o.$typeUrl === ListViewsRequest.typeUrl || typeof o.parent === "string" && typeof o.pageToken === "string" && typeof o.pageSize === "number");
  },
  isSDK(o: any): o is ListViewsRequestSDKType {
    return o && (o.$typeUrl === ListViewsRequest.typeUrl || typeof o.parent === "string" && typeof o.page_token === "string" && typeof o.page_size === "number");
  },
  isAmino(o: any): o is ListViewsRequestAmino {
    return o && (o.$typeUrl === ListViewsRequest.typeUrl || typeof o.parent === "string" && typeof o.page_token === "string" && typeof o.page_size === "number");
  },
  encode(message: ListViewsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parent !== undefined) {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageToken !== undefined) {
      writer.uint32(18).string(message.pageToken);
    }
    if (message.pageSize !== undefined) {
      writer.uint32(24).int32(message.pageSize);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListViewsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListViewsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.pageToken = reader.string();
          break;
        case 3:
          message.pageSize = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListViewsRequest {
    const obj = createBaseListViewsRequest();
    if (isSet(object.parent)) obj.parent = String(object.parent);
    if (isSet(object.pageToken)) obj.pageToken = String(object.pageToken);
    if (isSet(object.pageSize)) obj.pageSize = Number(object.pageSize);
    return obj;
  },
  toJSON(message: ListViewsRequest): JsonSafe<ListViewsRequest> {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    return obj;
  },
  fromPartial(object: DeepPartial<ListViewsRequest>): ListViewsRequest {
    const message = createBaseListViewsRequest();
    message.parent = object.parent ?? "";
    message.pageToken = object.pageToken ?? "";
    message.pageSize = object.pageSize ?? 0;
    return message;
  },
  fromSDK(object: ListViewsRequestSDKType): ListViewsRequest {
    return {
      parent: object?.parent,
      pageToken: object?.page_token,
      pageSize: object?.page_size
    };
  },
  fromSDKJSON(object: any): ListViewsRequestSDKType {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      page_token: isSet(object.page_token) ? String(object.page_token) : "",
      page_size: isSet(object.page_size) ? Number(object.page_size) : 0
    };
  },
  toSDK(message: ListViewsRequest): ListViewsRequestSDKType {
    const obj: any = {};
    obj.parent = message.parent;
    obj.page_token = message.pageToken;
    obj.page_size = message.pageSize;
    return obj;
  },
  fromAmino(object: ListViewsRequestAmino): ListViewsRequest {
    const message = createBaseListViewsRequest();
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    }
    if (object.page_token !== undefined && object.page_token !== null) {
      message.pageToken = object.page_token;
    }
    if (object.page_size !== undefined && object.page_size !== null) {
      message.pageSize = object.page_size;
    }
    return message;
  },
  toAmino(message: ListViewsRequest): ListViewsRequestAmino {
    const obj: any = {};
    obj.parent = message.parent === "" ? undefined : message.parent;
    obj.page_token = message.pageToken === "" ? undefined : message.pageToken;
    obj.page_size = message.pageSize === 0 ? undefined : message.pageSize;
    return obj;
  },
  fromAminoMsg(object: ListViewsRequestAminoMsg): ListViewsRequest {
    return ListViewsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ListViewsRequestProtoMsg): ListViewsRequest {
    return ListViewsRequest.decode(message.value);
  },
  toProto(message: ListViewsRequest): Uint8Array {
    return ListViewsRequest.encode(message).finish();
  },
  toProtoMsg(message: ListViewsRequest): ListViewsRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.ListViewsRequest",
      value: ListViewsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseListViewsResponse(): ListViewsResponse {
  return {
    views: [],
    nextPageToken: ""
  };
}
export const ListViewsResponse = {
  typeUrl: "/google.logging.v2.ListViewsResponse",
  is(o: any): o is ListViewsResponse {
    return o && (o.$typeUrl === ListViewsResponse.typeUrl || Array.isArray(o.views) && (!o.views.length || LogView.is(o.views[0])) && typeof o.nextPageToken === "string");
  },
  isSDK(o: any): o is ListViewsResponseSDKType {
    return o && (o.$typeUrl === ListViewsResponse.typeUrl || Array.isArray(o.views) && (!o.views.length || LogView.isSDK(o.views[0])) && typeof o.next_page_token === "string");
  },
  isAmino(o: any): o is ListViewsResponseAmino {
    return o && (o.$typeUrl === ListViewsResponse.typeUrl || Array.isArray(o.views) && (!o.views.length || LogView.isAmino(o.views[0])) && typeof o.next_page_token === "string");
  },
  encode(message: ListViewsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.views) {
      LogView.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== undefined) {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListViewsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListViewsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.views.push(LogView.decode(reader, reader.uint32()));
          break;
        case 2:
          message.nextPageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListViewsResponse {
    const obj = createBaseListViewsResponse();
    if (Array.isArray(object?.views)) obj.views = object.views.map((e: any) => LogView.fromJSON(e));
    if (isSet(object.nextPageToken)) obj.nextPageToken = String(object.nextPageToken);
    return obj;
  },
  toJSON(message: ListViewsResponse): JsonSafe<ListViewsResponse> {
    const obj: any = {};
    if (message.views) {
      obj.views = message.views.map(e => e ? LogView.toJSON(e) : undefined);
    } else {
      obj.views = [];
    }
    message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
    return obj;
  },
  fromPartial(object: DeepPartial<ListViewsResponse>): ListViewsResponse {
    const message = createBaseListViewsResponse();
    message.views = object.views?.map(e => LogView.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
  fromSDK(object: ListViewsResponseSDKType): ListViewsResponse {
    return {
      views: Array.isArray(object?.views) ? object.views.map((e: any) => LogView.fromSDK(e)) : [],
      nextPageToken: object?.next_page_token
    };
  },
  fromSDKJSON(object: any): ListViewsResponseSDKType {
    return {
      views: Array.isArray(object?.views) ? object.views.map((e: any) => LogView.fromSDKJSON(e)) : [],
      next_page_token: isSet(object.next_page_token) ? String(object.next_page_token) : ""
    };
  },
  toSDK(message: ListViewsResponse): ListViewsResponseSDKType {
    const obj: any = {};
    if (message.views) {
      obj.views = message.views.map(e => e ? LogView.toSDK(e) : undefined);
    } else {
      obj.views = [];
    }
    obj.next_page_token = message.nextPageToken;
    return obj;
  },
  fromAmino(object: ListViewsResponseAmino): ListViewsResponse {
    const message = createBaseListViewsResponse();
    message.views = object.views?.map(e => LogView.fromAmino(e)) || [];
    if (object.next_page_token !== undefined && object.next_page_token !== null) {
      message.nextPageToken = object.next_page_token;
    }
    return message;
  },
  toAmino(message: ListViewsResponse): ListViewsResponseAmino {
    const obj: any = {};
    if (message.views) {
      obj.views = message.views.map(e => e ? LogView.toAmino(e) : undefined);
    } else {
      obj.views = message.views;
    }
    obj.next_page_token = message.nextPageToken === "" ? undefined : message.nextPageToken;
    return obj;
  },
  fromAminoMsg(object: ListViewsResponseAminoMsg): ListViewsResponse {
    return ListViewsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ListViewsResponseProtoMsg): ListViewsResponse {
    return ListViewsResponse.decode(message.value);
  },
  toProto(message: ListViewsResponse): Uint8Array {
    return ListViewsResponse.encode(message).finish();
  },
  toProtoMsg(message: ListViewsResponse): ListViewsResponseProtoMsg {
    return {
      typeUrl: "/google.logging.v2.ListViewsResponse",
      value: ListViewsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    LogView.registerTypeUrl();
  }
};
function createBaseCreateViewRequest(): CreateViewRequest {
  return {
    parent: "",
    viewId: "",
    view: undefined
  };
}
export const CreateViewRequest = {
  typeUrl: "/google.logging.v2.CreateViewRequest",
  is(o: any): o is CreateViewRequest {
    return o && (o.$typeUrl === CreateViewRequest.typeUrl || typeof o.parent === "string" && typeof o.viewId === "string");
  },
  isSDK(o: any): o is CreateViewRequestSDKType {
    return o && (o.$typeUrl === CreateViewRequest.typeUrl || typeof o.parent === "string" && typeof o.view_id === "string");
  },
  isAmino(o: any): o is CreateViewRequestAmino {
    return o && (o.$typeUrl === CreateViewRequest.typeUrl || typeof o.parent === "string" && typeof o.view_id === "string");
  },
  encode(message: CreateViewRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parent !== undefined) {
      writer.uint32(10).string(message.parent);
    }
    if (message.viewId !== undefined) {
      writer.uint32(18).string(message.viewId);
    }
    if (message.view !== undefined) {
      LogView.encode(message.view, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CreateViewRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateViewRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.viewId = reader.string();
          break;
        case 3:
          message.view = LogView.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CreateViewRequest {
    const obj = createBaseCreateViewRequest();
    if (isSet(object.parent)) obj.parent = String(object.parent);
    if (isSet(object.viewId)) obj.viewId = String(object.viewId);
    if (isSet(object.view)) obj.view = LogView.fromJSON(object.view);
    return obj;
  },
  toJSON(message: CreateViewRequest): JsonSafe<CreateViewRequest> {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.viewId !== undefined && (obj.viewId = message.viewId);
    message.view !== undefined && (obj.view = message.view ? LogView.toJSON(message.view) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<CreateViewRequest>): CreateViewRequest {
    const message = createBaseCreateViewRequest();
    message.parent = object.parent ?? "";
    message.viewId = object.viewId ?? "";
    if (object.view !== undefined && object.view !== null) {
      message.view = LogView.fromPartial(object.view);
    }
    return message;
  },
  fromSDK(object: CreateViewRequestSDKType): CreateViewRequest {
    return {
      parent: object?.parent,
      viewId: object?.view_id,
      view: object.view ? LogView.fromSDK(object.view) : undefined
    };
  },
  fromSDKJSON(object: any): CreateViewRequestSDKType {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      view_id: isSet(object.view_id) ? String(object.view_id) : "",
      view: isSet(object.view) ? LogView.fromSDKJSON(object.view) : undefined
    };
  },
  toSDK(message: CreateViewRequest): CreateViewRequestSDKType {
    const obj: any = {};
    obj.parent = message.parent;
    obj.view_id = message.viewId;
    message.view !== undefined && (obj.view = message.view ? LogView.toSDK(message.view) : undefined);
    return obj;
  },
  fromAmino(object: CreateViewRequestAmino): CreateViewRequest {
    const message = createBaseCreateViewRequest();
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    }
    if (object.view_id !== undefined && object.view_id !== null) {
      message.viewId = object.view_id;
    }
    if (object.view !== undefined && object.view !== null) {
      message.view = LogView.fromAmino(object.view);
    }
    return message;
  },
  toAmino(message: CreateViewRequest): CreateViewRequestAmino {
    const obj: any = {};
    obj.parent = message.parent === "" ? undefined : message.parent;
    obj.view_id = message.viewId === "" ? undefined : message.viewId;
    obj.view = message.view ? LogView.toAmino(message.view) : undefined;
    return obj;
  },
  fromAminoMsg(object: CreateViewRequestAminoMsg): CreateViewRequest {
    return CreateViewRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: CreateViewRequestProtoMsg): CreateViewRequest {
    return CreateViewRequest.decode(message.value);
  },
  toProto(message: CreateViewRequest): Uint8Array {
    return CreateViewRequest.encode(message).finish();
  },
  toProtoMsg(message: CreateViewRequest): CreateViewRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.CreateViewRequest",
      value: CreateViewRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    LogView.registerTypeUrl();
  }
};
function createBaseUpdateViewRequest(): UpdateViewRequest {
  return {
    name: "",
    view: undefined,
    updateMask: undefined
  };
}
export const UpdateViewRequest = {
  typeUrl: "/google.logging.v2.UpdateViewRequest",
  is(o: any): o is UpdateViewRequest {
    return o && (o.$typeUrl === UpdateViewRequest.typeUrl || typeof o.name === "string");
  },
  isSDK(o: any): o is UpdateViewRequestSDKType {
    return o && (o.$typeUrl === UpdateViewRequest.typeUrl || typeof o.name === "string");
  },
  isAmino(o: any): o is UpdateViewRequestAmino {
    return o && (o.$typeUrl === UpdateViewRequest.typeUrl || typeof o.name === "string");
  },
  encode(message: UpdateViewRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.view !== undefined) {
      LogView.encode(message.view, writer.uint32(18).fork()).ldelim();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateViewRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateViewRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.view = LogView.decode(reader, reader.uint32());
          break;
        case 4:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpdateViewRequest {
    const obj = createBaseUpdateViewRequest();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.view)) obj.view = LogView.fromJSON(object.view);
    if (isSet(object.updateMask)) obj.updateMask = FieldMask.fromJSON(object.updateMask);
    return obj;
  },
  toJSON(message: UpdateViewRequest): JsonSafe<UpdateViewRequest> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.view !== undefined && (obj.view = message.view ? LogView.toJSON(message.view) : undefined);
    message.updateMask !== undefined && (obj.updateMask = message.updateMask ? FieldMask.toJSON(message.updateMask) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<UpdateViewRequest>): UpdateViewRequest {
    const message = createBaseUpdateViewRequest();
    message.name = object.name ?? "";
    if (object.view !== undefined && object.view !== null) {
      message.view = LogView.fromPartial(object.view);
    }
    if (object.updateMask !== undefined && object.updateMask !== null) {
      message.updateMask = FieldMask.fromPartial(object.updateMask);
    }
    return message;
  },
  fromSDK(object: UpdateViewRequestSDKType): UpdateViewRequest {
    return {
      name: object?.name,
      view: object.view ? LogView.fromSDK(object.view) : undefined,
      updateMask: object.update_mask ? FieldMask.fromSDK(object.update_mask) : undefined
    };
  },
  fromSDKJSON(object: any): UpdateViewRequestSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      view: isSet(object.view) ? LogView.fromSDKJSON(object.view) : undefined,
      update_mask: isSet(object.update_mask) ? FieldMask.fromSDKJSON(object.update_mask) : undefined
    };
  },
  toSDK(message: UpdateViewRequest): UpdateViewRequestSDKType {
    const obj: any = {};
    obj.name = message.name;
    message.view !== undefined && (obj.view = message.view ? LogView.toSDK(message.view) : undefined);
    message.updateMask !== undefined && (obj.update_mask = message.updateMask ? FieldMask.toSDK(message.updateMask) : undefined);
    return obj;
  },
  fromAmino(object: UpdateViewRequestAmino): UpdateViewRequest {
    const message = createBaseUpdateViewRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.view !== undefined && object.view !== null) {
      message.view = LogView.fromAmino(object.view);
    }
    if (object.update_mask !== undefined && object.update_mask !== null) {
      message.updateMask = FieldMask.fromAmino(object.update_mask);
    }
    return message;
  },
  toAmino(message: UpdateViewRequest): UpdateViewRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.view = message.view ? LogView.toAmino(message.view) : undefined;
    obj.update_mask = message.updateMask ? FieldMask.toAmino(message.updateMask) : undefined;
    return obj;
  },
  fromAminoMsg(object: UpdateViewRequestAminoMsg): UpdateViewRequest {
    return UpdateViewRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateViewRequestProtoMsg): UpdateViewRequest {
    return UpdateViewRequest.decode(message.value);
  },
  toProto(message: UpdateViewRequest): Uint8Array {
    return UpdateViewRequest.encode(message).finish();
  },
  toProtoMsg(message: UpdateViewRequest): UpdateViewRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.UpdateViewRequest",
      value: UpdateViewRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    LogView.registerTypeUrl();
    FieldMask.registerTypeUrl();
  }
};
function createBaseGetViewRequest(): GetViewRequest {
  return {
    name: ""
  };
}
export const GetViewRequest = {
  typeUrl: "/google.logging.v2.GetViewRequest",
  is(o: any): o is GetViewRequest {
    return o && (o.$typeUrl === GetViewRequest.typeUrl || typeof o.name === "string");
  },
  isSDK(o: any): o is GetViewRequestSDKType {
    return o && (o.$typeUrl === GetViewRequest.typeUrl || typeof o.name === "string");
  },
  isAmino(o: any): o is GetViewRequestAmino {
    return o && (o.$typeUrl === GetViewRequest.typeUrl || typeof o.name === "string");
  },
  encode(message: GetViewRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetViewRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetViewRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetViewRequest {
    const obj = createBaseGetViewRequest();
    if (isSet(object.name)) obj.name = String(object.name);
    return obj;
  },
  toJSON(message: GetViewRequest): JsonSafe<GetViewRequest> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial(object: DeepPartial<GetViewRequest>): GetViewRequest {
    const message = createBaseGetViewRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromSDK(object: GetViewRequestSDKType): GetViewRequest {
    return {
      name: object?.name
    };
  },
  fromSDKJSON(object: any): GetViewRequestSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toSDK(message: GetViewRequest): GetViewRequestSDKType {
    const obj: any = {};
    obj.name = message.name;
    return obj;
  },
  fromAmino(object: GetViewRequestAmino): GetViewRequest {
    const message = createBaseGetViewRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: GetViewRequest): GetViewRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: GetViewRequestAminoMsg): GetViewRequest {
    return GetViewRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: GetViewRequestProtoMsg): GetViewRequest {
    return GetViewRequest.decode(message.value);
  },
  toProto(message: GetViewRequest): Uint8Array {
    return GetViewRequest.encode(message).finish();
  },
  toProtoMsg(message: GetViewRequest): GetViewRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.GetViewRequest",
      value: GetViewRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDeleteViewRequest(): DeleteViewRequest {
  return {
    name: ""
  };
}
export const DeleteViewRequest = {
  typeUrl: "/google.logging.v2.DeleteViewRequest",
  is(o: any): o is DeleteViewRequest {
    return o && (o.$typeUrl === DeleteViewRequest.typeUrl || typeof o.name === "string");
  },
  isSDK(o: any): o is DeleteViewRequestSDKType {
    return o && (o.$typeUrl === DeleteViewRequest.typeUrl || typeof o.name === "string");
  },
  isAmino(o: any): o is DeleteViewRequestAmino {
    return o && (o.$typeUrl === DeleteViewRequest.typeUrl || typeof o.name === "string");
  },
  encode(message: DeleteViewRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DeleteViewRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteViewRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DeleteViewRequest {
    const obj = createBaseDeleteViewRequest();
    if (isSet(object.name)) obj.name = String(object.name);
    return obj;
  },
  toJSON(message: DeleteViewRequest): JsonSafe<DeleteViewRequest> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial(object: DeepPartial<DeleteViewRequest>): DeleteViewRequest {
    const message = createBaseDeleteViewRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromSDK(object: DeleteViewRequestSDKType): DeleteViewRequest {
    return {
      name: object?.name
    };
  },
  fromSDKJSON(object: any): DeleteViewRequestSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toSDK(message: DeleteViewRequest): DeleteViewRequestSDKType {
    const obj: any = {};
    obj.name = message.name;
    return obj;
  },
  fromAmino(object: DeleteViewRequestAmino): DeleteViewRequest {
    const message = createBaseDeleteViewRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: DeleteViewRequest): DeleteViewRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: DeleteViewRequestAminoMsg): DeleteViewRequest {
    return DeleteViewRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: DeleteViewRequestProtoMsg): DeleteViewRequest {
    return DeleteViewRequest.decode(message.value);
  },
  toProto(message: DeleteViewRequest): Uint8Array {
    return DeleteViewRequest.encode(message).finish();
  },
  toProtoMsg(message: DeleteViewRequest): DeleteViewRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.DeleteViewRequest",
      value: DeleteViewRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseListSinksRequest(): ListSinksRequest {
  return {
    parent: "",
    pageToken: "",
    pageSize: 0
  };
}
export const ListSinksRequest = {
  typeUrl: "/google.logging.v2.ListSinksRequest",
  is(o: any): o is ListSinksRequest {
    return o && (o.$typeUrl === ListSinksRequest.typeUrl || typeof o.parent === "string" && typeof o.pageToken === "string" && typeof o.pageSize === "number");
  },
  isSDK(o: any): o is ListSinksRequestSDKType {
    return o && (o.$typeUrl === ListSinksRequest.typeUrl || typeof o.parent === "string" && typeof o.page_token === "string" && typeof o.page_size === "number");
  },
  isAmino(o: any): o is ListSinksRequestAmino {
    return o && (o.$typeUrl === ListSinksRequest.typeUrl || typeof o.parent === "string" && typeof o.page_token === "string" && typeof o.page_size === "number");
  },
  encode(message: ListSinksRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parent !== undefined) {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageToken !== undefined) {
      writer.uint32(18).string(message.pageToken);
    }
    if (message.pageSize !== undefined) {
      writer.uint32(24).int32(message.pageSize);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListSinksRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSinksRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.pageToken = reader.string();
          break;
        case 3:
          message.pageSize = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListSinksRequest {
    const obj = createBaseListSinksRequest();
    if (isSet(object.parent)) obj.parent = String(object.parent);
    if (isSet(object.pageToken)) obj.pageToken = String(object.pageToken);
    if (isSet(object.pageSize)) obj.pageSize = Number(object.pageSize);
    return obj;
  },
  toJSON(message: ListSinksRequest): JsonSafe<ListSinksRequest> {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    return obj;
  },
  fromPartial(object: DeepPartial<ListSinksRequest>): ListSinksRequest {
    const message = createBaseListSinksRequest();
    message.parent = object.parent ?? "";
    message.pageToken = object.pageToken ?? "";
    message.pageSize = object.pageSize ?? 0;
    return message;
  },
  fromSDK(object: ListSinksRequestSDKType): ListSinksRequest {
    return {
      parent: object?.parent,
      pageToken: object?.page_token,
      pageSize: object?.page_size
    };
  },
  fromSDKJSON(object: any): ListSinksRequestSDKType {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      page_token: isSet(object.page_token) ? String(object.page_token) : "",
      page_size: isSet(object.page_size) ? Number(object.page_size) : 0
    };
  },
  toSDK(message: ListSinksRequest): ListSinksRequestSDKType {
    const obj: any = {};
    obj.parent = message.parent;
    obj.page_token = message.pageToken;
    obj.page_size = message.pageSize;
    return obj;
  },
  fromAmino(object: ListSinksRequestAmino): ListSinksRequest {
    const message = createBaseListSinksRequest();
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    }
    if (object.page_token !== undefined && object.page_token !== null) {
      message.pageToken = object.page_token;
    }
    if (object.page_size !== undefined && object.page_size !== null) {
      message.pageSize = object.page_size;
    }
    return message;
  },
  toAmino(message: ListSinksRequest): ListSinksRequestAmino {
    const obj: any = {};
    obj.parent = message.parent === "" ? undefined : message.parent;
    obj.page_token = message.pageToken === "" ? undefined : message.pageToken;
    obj.page_size = message.pageSize === 0 ? undefined : message.pageSize;
    return obj;
  },
  fromAminoMsg(object: ListSinksRequestAminoMsg): ListSinksRequest {
    return ListSinksRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ListSinksRequestProtoMsg): ListSinksRequest {
    return ListSinksRequest.decode(message.value);
  },
  toProto(message: ListSinksRequest): Uint8Array {
    return ListSinksRequest.encode(message).finish();
  },
  toProtoMsg(message: ListSinksRequest): ListSinksRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.ListSinksRequest",
      value: ListSinksRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseListSinksResponse(): ListSinksResponse {
  return {
    sinks: [],
    nextPageToken: ""
  };
}
export const ListSinksResponse = {
  typeUrl: "/google.logging.v2.ListSinksResponse",
  is(o: any): o is ListSinksResponse {
    return o && (o.$typeUrl === ListSinksResponse.typeUrl || Array.isArray(o.sinks) && (!o.sinks.length || LogSink.is(o.sinks[0])) && typeof o.nextPageToken === "string");
  },
  isSDK(o: any): o is ListSinksResponseSDKType {
    return o && (o.$typeUrl === ListSinksResponse.typeUrl || Array.isArray(o.sinks) && (!o.sinks.length || LogSink.isSDK(o.sinks[0])) && typeof o.next_page_token === "string");
  },
  isAmino(o: any): o is ListSinksResponseAmino {
    return o && (o.$typeUrl === ListSinksResponse.typeUrl || Array.isArray(o.sinks) && (!o.sinks.length || LogSink.isAmino(o.sinks[0])) && typeof o.next_page_token === "string");
  },
  encode(message: ListSinksResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.sinks) {
      LogSink.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== undefined) {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListSinksResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSinksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sinks.push(LogSink.decode(reader, reader.uint32()));
          break;
        case 2:
          message.nextPageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListSinksResponse {
    const obj = createBaseListSinksResponse();
    if (Array.isArray(object?.sinks)) obj.sinks = object.sinks.map((e: any) => LogSink.fromJSON(e));
    if (isSet(object.nextPageToken)) obj.nextPageToken = String(object.nextPageToken);
    return obj;
  },
  toJSON(message: ListSinksResponse): JsonSafe<ListSinksResponse> {
    const obj: any = {};
    if (message.sinks) {
      obj.sinks = message.sinks.map(e => e ? LogSink.toJSON(e) : undefined);
    } else {
      obj.sinks = [];
    }
    message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
    return obj;
  },
  fromPartial(object: DeepPartial<ListSinksResponse>): ListSinksResponse {
    const message = createBaseListSinksResponse();
    message.sinks = object.sinks?.map(e => LogSink.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
  fromSDK(object: ListSinksResponseSDKType): ListSinksResponse {
    return {
      sinks: Array.isArray(object?.sinks) ? object.sinks.map((e: any) => LogSink.fromSDK(e)) : [],
      nextPageToken: object?.next_page_token
    };
  },
  fromSDKJSON(object: any): ListSinksResponseSDKType {
    return {
      sinks: Array.isArray(object?.sinks) ? object.sinks.map((e: any) => LogSink.fromSDKJSON(e)) : [],
      next_page_token: isSet(object.next_page_token) ? String(object.next_page_token) : ""
    };
  },
  toSDK(message: ListSinksResponse): ListSinksResponseSDKType {
    const obj: any = {};
    if (message.sinks) {
      obj.sinks = message.sinks.map(e => e ? LogSink.toSDK(e) : undefined);
    } else {
      obj.sinks = [];
    }
    obj.next_page_token = message.nextPageToken;
    return obj;
  },
  fromAmino(object: ListSinksResponseAmino): ListSinksResponse {
    const message = createBaseListSinksResponse();
    message.sinks = object.sinks?.map(e => LogSink.fromAmino(e)) || [];
    if (object.next_page_token !== undefined && object.next_page_token !== null) {
      message.nextPageToken = object.next_page_token;
    }
    return message;
  },
  toAmino(message: ListSinksResponse): ListSinksResponseAmino {
    const obj: any = {};
    if (message.sinks) {
      obj.sinks = message.sinks.map(e => e ? LogSink.toAmino(e) : undefined);
    } else {
      obj.sinks = message.sinks;
    }
    obj.next_page_token = message.nextPageToken === "" ? undefined : message.nextPageToken;
    return obj;
  },
  fromAminoMsg(object: ListSinksResponseAminoMsg): ListSinksResponse {
    return ListSinksResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ListSinksResponseProtoMsg): ListSinksResponse {
    return ListSinksResponse.decode(message.value);
  },
  toProto(message: ListSinksResponse): Uint8Array {
    return ListSinksResponse.encode(message).finish();
  },
  toProtoMsg(message: ListSinksResponse): ListSinksResponseProtoMsg {
    return {
      typeUrl: "/google.logging.v2.ListSinksResponse",
      value: ListSinksResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    LogSink.registerTypeUrl();
  }
};
function createBaseGetSinkRequest(): GetSinkRequest {
  return {
    sinkName: ""
  };
}
export const GetSinkRequest = {
  typeUrl: "/google.logging.v2.GetSinkRequest",
  is(o: any): o is GetSinkRequest {
    return o && (o.$typeUrl === GetSinkRequest.typeUrl || typeof o.sinkName === "string");
  },
  isSDK(o: any): o is GetSinkRequestSDKType {
    return o && (o.$typeUrl === GetSinkRequest.typeUrl || typeof o.sink_name === "string");
  },
  isAmino(o: any): o is GetSinkRequestAmino {
    return o && (o.$typeUrl === GetSinkRequest.typeUrl || typeof o.sink_name === "string");
  },
  encode(message: GetSinkRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sinkName !== undefined) {
      writer.uint32(10).string(message.sinkName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetSinkRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSinkRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sinkName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetSinkRequest {
    const obj = createBaseGetSinkRequest();
    if (isSet(object.sinkName)) obj.sinkName = String(object.sinkName);
    return obj;
  },
  toJSON(message: GetSinkRequest): JsonSafe<GetSinkRequest> {
    const obj: any = {};
    message.sinkName !== undefined && (obj.sinkName = message.sinkName);
    return obj;
  },
  fromPartial(object: DeepPartial<GetSinkRequest>): GetSinkRequest {
    const message = createBaseGetSinkRequest();
    message.sinkName = object.sinkName ?? "";
    return message;
  },
  fromSDK(object: GetSinkRequestSDKType): GetSinkRequest {
    return {
      sinkName: object?.sink_name
    };
  },
  fromSDKJSON(object: any): GetSinkRequestSDKType {
    return {
      sink_name: isSet(object.sink_name) ? String(object.sink_name) : ""
    };
  },
  toSDK(message: GetSinkRequest): GetSinkRequestSDKType {
    const obj: any = {};
    obj.sink_name = message.sinkName;
    return obj;
  },
  fromAmino(object: GetSinkRequestAmino): GetSinkRequest {
    const message = createBaseGetSinkRequest();
    if (object.sink_name !== undefined && object.sink_name !== null) {
      message.sinkName = object.sink_name;
    }
    return message;
  },
  toAmino(message: GetSinkRequest): GetSinkRequestAmino {
    const obj: any = {};
    obj.sink_name = message.sinkName === "" ? undefined : message.sinkName;
    return obj;
  },
  fromAminoMsg(object: GetSinkRequestAminoMsg): GetSinkRequest {
    return GetSinkRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: GetSinkRequestProtoMsg): GetSinkRequest {
    return GetSinkRequest.decode(message.value);
  },
  toProto(message: GetSinkRequest): Uint8Array {
    return GetSinkRequest.encode(message).finish();
  },
  toProtoMsg(message: GetSinkRequest): GetSinkRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.GetSinkRequest",
      value: GetSinkRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseCreateSinkRequest(): CreateSinkRequest {
  return {
    parent: "",
    sink: undefined,
    uniqueWriterIdentity: false
  };
}
export const CreateSinkRequest = {
  typeUrl: "/google.logging.v2.CreateSinkRequest",
  is(o: any): o is CreateSinkRequest {
    return o && (o.$typeUrl === CreateSinkRequest.typeUrl || typeof o.parent === "string" && typeof o.uniqueWriterIdentity === "boolean");
  },
  isSDK(o: any): o is CreateSinkRequestSDKType {
    return o && (o.$typeUrl === CreateSinkRequest.typeUrl || typeof o.parent === "string" && typeof o.unique_writer_identity === "boolean");
  },
  isAmino(o: any): o is CreateSinkRequestAmino {
    return o && (o.$typeUrl === CreateSinkRequest.typeUrl || typeof o.parent === "string" && typeof o.unique_writer_identity === "boolean");
  },
  encode(message: CreateSinkRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parent !== undefined) {
      writer.uint32(10).string(message.parent);
    }
    if (message.sink !== undefined) {
      LogSink.encode(message.sink, writer.uint32(18).fork()).ldelim();
    }
    if (message.uniqueWriterIdentity !== undefined) {
      writer.uint32(24).bool(message.uniqueWriterIdentity);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CreateSinkRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSinkRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.sink = LogSink.decode(reader, reader.uint32());
          break;
        case 3:
          message.uniqueWriterIdentity = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CreateSinkRequest {
    const obj = createBaseCreateSinkRequest();
    if (isSet(object.parent)) obj.parent = String(object.parent);
    if (isSet(object.sink)) obj.sink = LogSink.fromJSON(object.sink);
    if (isSet(object.uniqueWriterIdentity)) obj.uniqueWriterIdentity = Boolean(object.uniqueWriterIdentity);
    return obj;
  },
  toJSON(message: CreateSinkRequest): JsonSafe<CreateSinkRequest> {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.sink !== undefined && (obj.sink = message.sink ? LogSink.toJSON(message.sink) : undefined);
    message.uniqueWriterIdentity !== undefined && (obj.uniqueWriterIdentity = message.uniqueWriterIdentity);
    return obj;
  },
  fromPartial(object: DeepPartial<CreateSinkRequest>): CreateSinkRequest {
    const message = createBaseCreateSinkRequest();
    message.parent = object.parent ?? "";
    if (object.sink !== undefined && object.sink !== null) {
      message.sink = LogSink.fromPartial(object.sink);
    }
    message.uniqueWriterIdentity = object.uniqueWriterIdentity ?? false;
    return message;
  },
  fromSDK(object: CreateSinkRequestSDKType): CreateSinkRequest {
    return {
      parent: object?.parent,
      sink: object.sink ? LogSink.fromSDK(object.sink) : undefined,
      uniqueWriterIdentity: object?.unique_writer_identity
    };
  },
  fromSDKJSON(object: any): CreateSinkRequestSDKType {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      sink: isSet(object.sink) ? LogSink.fromSDKJSON(object.sink) : undefined,
      unique_writer_identity: isSet(object.unique_writer_identity) ? Boolean(object.unique_writer_identity) : false
    };
  },
  toSDK(message: CreateSinkRequest): CreateSinkRequestSDKType {
    const obj: any = {};
    obj.parent = message.parent;
    message.sink !== undefined && (obj.sink = message.sink ? LogSink.toSDK(message.sink) : undefined);
    obj.unique_writer_identity = message.uniqueWriterIdentity;
    return obj;
  },
  fromAmino(object: CreateSinkRequestAmino): CreateSinkRequest {
    const message = createBaseCreateSinkRequest();
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    }
    if (object.sink !== undefined && object.sink !== null) {
      message.sink = LogSink.fromAmino(object.sink);
    }
    if (object.unique_writer_identity !== undefined && object.unique_writer_identity !== null) {
      message.uniqueWriterIdentity = object.unique_writer_identity;
    }
    return message;
  },
  toAmino(message: CreateSinkRequest): CreateSinkRequestAmino {
    const obj: any = {};
    obj.parent = message.parent === "" ? undefined : message.parent;
    obj.sink = message.sink ? LogSink.toAmino(message.sink) : undefined;
    obj.unique_writer_identity = message.uniqueWriterIdentity === false ? undefined : message.uniqueWriterIdentity;
    return obj;
  },
  fromAminoMsg(object: CreateSinkRequestAminoMsg): CreateSinkRequest {
    return CreateSinkRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: CreateSinkRequestProtoMsg): CreateSinkRequest {
    return CreateSinkRequest.decode(message.value);
  },
  toProto(message: CreateSinkRequest): Uint8Array {
    return CreateSinkRequest.encode(message).finish();
  },
  toProtoMsg(message: CreateSinkRequest): CreateSinkRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.CreateSinkRequest",
      value: CreateSinkRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    LogSink.registerTypeUrl();
  }
};
function createBaseUpdateSinkRequest(): UpdateSinkRequest {
  return {
    sinkName: "",
    sink: undefined,
    uniqueWriterIdentity: false,
    updateMask: undefined
  };
}
export const UpdateSinkRequest = {
  typeUrl: "/google.logging.v2.UpdateSinkRequest",
  is(o: any): o is UpdateSinkRequest {
    return o && (o.$typeUrl === UpdateSinkRequest.typeUrl || typeof o.sinkName === "string" && typeof o.uniqueWriterIdentity === "boolean");
  },
  isSDK(o: any): o is UpdateSinkRequestSDKType {
    return o && (o.$typeUrl === UpdateSinkRequest.typeUrl || typeof o.sink_name === "string" && typeof o.unique_writer_identity === "boolean");
  },
  isAmino(o: any): o is UpdateSinkRequestAmino {
    return o && (o.$typeUrl === UpdateSinkRequest.typeUrl || typeof o.sink_name === "string" && typeof o.unique_writer_identity === "boolean");
  },
  encode(message: UpdateSinkRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sinkName !== undefined) {
      writer.uint32(10).string(message.sinkName);
    }
    if (message.sink !== undefined) {
      LogSink.encode(message.sink, writer.uint32(18).fork()).ldelim();
    }
    if (message.uniqueWriterIdentity !== undefined) {
      writer.uint32(24).bool(message.uniqueWriterIdentity);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateSinkRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSinkRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sinkName = reader.string();
          break;
        case 2:
          message.sink = LogSink.decode(reader, reader.uint32());
          break;
        case 3:
          message.uniqueWriterIdentity = reader.bool();
          break;
        case 4:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpdateSinkRequest {
    const obj = createBaseUpdateSinkRequest();
    if (isSet(object.sinkName)) obj.sinkName = String(object.sinkName);
    if (isSet(object.sink)) obj.sink = LogSink.fromJSON(object.sink);
    if (isSet(object.uniqueWriterIdentity)) obj.uniqueWriterIdentity = Boolean(object.uniqueWriterIdentity);
    if (isSet(object.updateMask)) obj.updateMask = FieldMask.fromJSON(object.updateMask);
    return obj;
  },
  toJSON(message: UpdateSinkRequest): JsonSafe<UpdateSinkRequest> {
    const obj: any = {};
    message.sinkName !== undefined && (obj.sinkName = message.sinkName);
    message.sink !== undefined && (obj.sink = message.sink ? LogSink.toJSON(message.sink) : undefined);
    message.uniqueWriterIdentity !== undefined && (obj.uniqueWriterIdentity = message.uniqueWriterIdentity);
    message.updateMask !== undefined && (obj.updateMask = message.updateMask ? FieldMask.toJSON(message.updateMask) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<UpdateSinkRequest>): UpdateSinkRequest {
    const message = createBaseUpdateSinkRequest();
    message.sinkName = object.sinkName ?? "";
    if (object.sink !== undefined && object.sink !== null) {
      message.sink = LogSink.fromPartial(object.sink);
    }
    message.uniqueWriterIdentity = object.uniqueWriterIdentity ?? false;
    if (object.updateMask !== undefined && object.updateMask !== null) {
      message.updateMask = FieldMask.fromPartial(object.updateMask);
    }
    return message;
  },
  fromSDK(object: UpdateSinkRequestSDKType): UpdateSinkRequest {
    return {
      sinkName: object?.sink_name,
      sink: object.sink ? LogSink.fromSDK(object.sink) : undefined,
      uniqueWriterIdentity: object?.unique_writer_identity,
      updateMask: object.update_mask ? FieldMask.fromSDK(object.update_mask) : undefined
    };
  },
  fromSDKJSON(object: any): UpdateSinkRequestSDKType {
    return {
      sink_name: isSet(object.sink_name) ? String(object.sink_name) : "",
      sink: isSet(object.sink) ? LogSink.fromSDKJSON(object.sink) : undefined,
      unique_writer_identity: isSet(object.unique_writer_identity) ? Boolean(object.unique_writer_identity) : false,
      update_mask: isSet(object.update_mask) ? FieldMask.fromSDKJSON(object.update_mask) : undefined
    };
  },
  toSDK(message: UpdateSinkRequest): UpdateSinkRequestSDKType {
    const obj: any = {};
    obj.sink_name = message.sinkName;
    message.sink !== undefined && (obj.sink = message.sink ? LogSink.toSDK(message.sink) : undefined);
    obj.unique_writer_identity = message.uniqueWriterIdentity;
    message.updateMask !== undefined && (obj.update_mask = message.updateMask ? FieldMask.toSDK(message.updateMask) : undefined);
    return obj;
  },
  fromAmino(object: UpdateSinkRequestAmino): UpdateSinkRequest {
    const message = createBaseUpdateSinkRequest();
    if (object.sink_name !== undefined && object.sink_name !== null) {
      message.sinkName = object.sink_name;
    }
    if (object.sink !== undefined && object.sink !== null) {
      message.sink = LogSink.fromAmino(object.sink);
    }
    if (object.unique_writer_identity !== undefined && object.unique_writer_identity !== null) {
      message.uniqueWriterIdentity = object.unique_writer_identity;
    }
    if (object.update_mask !== undefined && object.update_mask !== null) {
      message.updateMask = FieldMask.fromAmino(object.update_mask);
    }
    return message;
  },
  toAmino(message: UpdateSinkRequest): UpdateSinkRequestAmino {
    const obj: any = {};
    obj.sink_name = message.sinkName === "" ? undefined : message.sinkName;
    obj.sink = message.sink ? LogSink.toAmino(message.sink) : undefined;
    obj.unique_writer_identity = message.uniqueWriterIdentity === false ? undefined : message.uniqueWriterIdentity;
    obj.update_mask = message.updateMask ? FieldMask.toAmino(message.updateMask) : undefined;
    return obj;
  },
  fromAminoMsg(object: UpdateSinkRequestAminoMsg): UpdateSinkRequest {
    return UpdateSinkRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateSinkRequestProtoMsg): UpdateSinkRequest {
    return UpdateSinkRequest.decode(message.value);
  },
  toProto(message: UpdateSinkRequest): Uint8Array {
    return UpdateSinkRequest.encode(message).finish();
  },
  toProtoMsg(message: UpdateSinkRequest): UpdateSinkRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.UpdateSinkRequest",
      value: UpdateSinkRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    LogSink.registerTypeUrl();
    FieldMask.registerTypeUrl();
  }
};
function createBaseDeleteSinkRequest(): DeleteSinkRequest {
  return {
    sinkName: ""
  };
}
export const DeleteSinkRequest = {
  typeUrl: "/google.logging.v2.DeleteSinkRequest",
  is(o: any): o is DeleteSinkRequest {
    return o && (o.$typeUrl === DeleteSinkRequest.typeUrl || typeof o.sinkName === "string");
  },
  isSDK(o: any): o is DeleteSinkRequestSDKType {
    return o && (o.$typeUrl === DeleteSinkRequest.typeUrl || typeof o.sink_name === "string");
  },
  isAmino(o: any): o is DeleteSinkRequestAmino {
    return o && (o.$typeUrl === DeleteSinkRequest.typeUrl || typeof o.sink_name === "string");
  },
  encode(message: DeleteSinkRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sinkName !== undefined) {
      writer.uint32(10).string(message.sinkName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DeleteSinkRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteSinkRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sinkName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DeleteSinkRequest {
    const obj = createBaseDeleteSinkRequest();
    if (isSet(object.sinkName)) obj.sinkName = String(object.sinkName);
    return obj;
  },
  toJSON(message: DeleteSinkRequest): JsonSafe<DeleteSinkRequest> {
    const obj: any = {};
    message.sinkName !== undefined && (obj.sinkName = message.sinkName);
    return obj;
  },
  fromPartial(object: DeepPartial<DeleteSinkRequest>): DeleteSinkRequest {
    const message = createBaseDeleteSinkRequest();
    message.sinkName = object.sinkName ?? "";
    return message;
  },
  fromSDK(object: DeleteSinkRequestSDKType): DeleteSinkRequest {
    return {
      sinkName: object?.sink_name
    };
  },
  fromSDKJSON(object: any): DeleteSinkRequestSDKType {
    return {
      sink_name: isSet(object.sink_name) ? String(object.sink_name) : ""
    };
  },
  toSDK(message: DeleteSinkRequest): DeleteSinkRequestSDKType {
    const obj: any = {};
    obj.sink_name = message.sinkName;
    return obj;
  },
  fromAmino(object: DeleteSinkRequestAmino): DeleteSinkRequest {
    const message = createBaseDeleteSinkRequest();
    if (object.sink_name !== undefined && object.sink_name !== null) {
      message.sinkName = object.sink_name;
    }
    return message;
  },
  toAmino(message: DeleteSinkRequest): DeleteSinkRequestAmino {
    const obj: any = {};
    obj.sink_name = message.sinkName === "" ? undefined : message.sinkName;
    return obj;
  },
  fromAminoMsg(object: DeleteSinkRequestAminoMsg): DeleteSinkRequest {
    return DeleteSinkRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: DeleteSinkRequestProtoMsg): DeleteSinkRequest {
    return DeleteSinkRequest.decode(message.value);
  },
  toProto(message: DeleteSinkRequest): Uint8Array {
    return DeleteSinkRequest.encode(message).finish();
  },
  toProtoMsg(message: DeleteSinkRequest): DeleteSinkRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.DeleteSinkRequest",
      value: DeleteSinkRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseLogExclusion(): LogExclusion {
  return {
    name: "",
    description: "",
    filter: "",
    disabled: false,
    createTime: undefined,
    updateTime: undefined
  };
}
export const LogExclusion = {
  typeUrl: "/google.logging.v2.LogExclusion",
  is(o: any): o is LogExclusion {
    return o && (o.$typeUrl === LogExclusion.typeUrl || typeof o.name === "string" && typeof o.description === "string" && typeof o.filter === "string" && typeof o.disabled === "boolean");
  },
  isSDK(o: any): o is LogExclusionSDKType {
    return o && (o.$typeUrl === LogExclusion.typeUrl || typeof o.name === "string" && typeof o.description === "string" && typeof o.filter === "string" && typeof o.disabled === "boolean");
  },
  isAmino(o: any): o is LogExclusionAmino {
    return o && (o.$typeUrl === LogExclusion.typeUrl || typeof o.name === "string" && typeof o.description === "string" && typeof o.filter === "string" && typeof o.disabled === "boolean");
  },
  encode(message: LogExclusion, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }
    if (message.filter !== undefined) {
      writer.uint32(26).string(message.filter);
    }
    if (message.disabled !== undefined) {
      writer.uint32(32).bool(message.disabled);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LogExclusion {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogExclusion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.filter = reader.string();
          break;
        case 4:
          message.disabled = reader.bool();
          break;
        case 5:
          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LogExclusion {
    const obj = createBaseLogExclusion();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.filter)) obj.filter = String(object.filter);
    if (isSet(object.disabled)) obj.disabled = Boolean(object.disabled);
    if (isSet(object.createTime)) obj.createTime = new Date(object.createTime);
    if (isSet(object.updateTime)) obj.updateTime = new Date(object.updateTime);
    return obj;
  },
  toJSON(message: LogExclusion): JsonSafe<LogExclusion> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.filter !== undefined && (obj.filter = message.filter);
    message.disabled !== undefined && (obj.disabled = message.disabled);
    message.createTime !== undefined && (obj.createTime = message.createTime.toISOString());
    message.updateTime !== undefined && (obj.updateTime = message.updateTime.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<LogExclusion>): LogExclusion {
    const message = createBaseLogExclusion();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.filter = object.filter ?? "";
    message.disabled = object.disabled ?? false;
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    return message;
  },
  fromSDK(object: LogExclusionSDKType): LogExclusion {
    return {
      name: object?.name,
      description: object?.description,
      filter: object?.filter,
      disabled: object?.disabled,
      createTime: object.create_time ?? undefined,
      updateTime: object.update_time ?? undefined
    };
  },
  fromSDKJSON(object: any): LogExclusionSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      filter: isSet(object.filter) ? String(object.filter) : "",
      disabled: isSet(object.disabled) ? Boolean(object.disabled) : false,
      create_time: isSet(object.create_time) ? new Date(object.create_time) : undefined,
      update_time: isSet(object.update_time) ? new Date(object.update_time) : undefined
    };
  },
  toSDK(message: LogExclusion): LogExclusionSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.description = message.description;
    obj.filter = message.filter;
    obj.disabled = message.disabled;
    message.createTime !== undefined && (obj.create_time = message.createTime ?? undefined);
    message.updateTime !== undefined && (obj.update_time = message.updateTime ?? undefined);
    return obj;
  },
  fromAmino(object: LogExclusionAmino): LogExclusion {
    const message = createBaseLogExclusion();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.filter !== undefined && object.filter !== null) {
      message.filter = object.filter;
    }
    if (object.disabled !== undefined && object.disabled !== null) {
      message.disabled = object.disabled;
    }
    if (object.create_time !== undefined && object.create_time !== null) {
      message.createTime = fromTimestamp(Timestamp.fromAmino(object.create_time));
    }
    if (object.update_time !== undefined && object.update_time !== null) {
      message.updateTime = fromTimestamp(Timestamp.fromAmino(object.update_time));
    }
    return message;
  },
  toAmino(message: LogExclusion): LogExclusionAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.filter = message.filter === "" ? undefined : message.filter;
    obj.disabled = message.disabled === false ? undefined : message.disabled;
    obj.create_time = message.createTime ? Timestamp.toAmino(toTimestamp(message.createTime)) : undefined;
    obj.update_time = message.updateTime ? Timestamp.toAmino(toTimestamp(message.updateTime)) : undefined;
    return obj;
  },
  fromAminoMsg(object: LogExclusionAminoMsg): LogExclusion {
    return LogExclusion.fromAmino(object.value);
  },
  fromProtoMsg(message: LogExclusionProtoMsg): LogExclusion {
    return LogExclusion.decode(message.value);
  },
  toProto(message: LogExclusion): Uint8Array {
    return LogExclusion.encode(message).finish();
  },
  toProtoMsg(message: LogExclusion): LogExclusionProtoMsg {
    return {
      typeUrl: "/google.logging.v2.LogExclusion",
      value: LogExclusion.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseListExclusionsRequest(): ListExclusionsRequest {
  return {
    parent: "",
    pageToken: "",
    pageSize: 0
  };
}
export const ListExclusionsRequest = {
  typeUrl: "/google.logging.v2.ListExclusionsRequest",
  is(o: any): o is ListExclusionsRequest {
    return o && (o.$typeUrl === ListExclusionsRequest.typeUrl || typeof o.parent === "string" && typeof o.pageToken === "string" && typeof o.pageSize === "number");
  },
  isSDK(o: any): o is ListExclusionsRequestSDKType {
    return o && (o.$typeUrl === ListExclusionsRequest.typeUrl || typeof o.parent === "string" && typeof o.page_token === "string" && typeof o.page_size === "number");
  },
  isAmino(o: any): o is ListExclusionsRequestAmino {
    return o && (o.$typeUrl === ListExclusionsRequest.typeUrl || typeof o.parent === "string" && typeof o.page_token === "string" && typeof o.page_size === "number");
  },
  encode(message: ListExclusionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parent !== undefined) {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageToken !== undefined) {
      writer.uint32(18).string(message.pageToken);
    }
    if (message.pageSize !== undefined) {
      writer.uint32(24).int32(message.pageSize);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListExclusionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListExclusionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.pageToken = reader.string();
          break;
        case 3:
          message.pageSize = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListExclusionsRequest {
    const obj = createBaseListExclusionsRequest();
    if (isSet(object.parent)) obj.parent = String(object.parent);
    if (isSet(object.pageToken)) obj.pageToken = String(object.pageToken);
    if (isSet(object.pageSize)) obj.pageSize = Number(object.pageSize);
    return obj;
  },
  toJSON(message: ListExclusionsRequest): JsonSafe<ListExclusionsRequest> {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    return obj;
  },
  fromPartial(object: DeepPartial<ListExclusionsRequest>): ListExclusionsRequest {
    const message = createBaseListExclusionsRequest();
    message.parent = object.parent ?? "";
    message.pageToken = object.pageToken ?? "";
    message.pageSize = object.pageSize ?? 0;
    return message;
  },
  fromSDK(object: ListExclusionsRequestSDKType): ListExclusionsRequest {
    return {
      parent: object?.parent,
      pageToken: object?.page_token,
      pageSize: object?.page_size
    };
  },
  fromSDKJSON(object: any): ListExclusionsRequestSDKType {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      page_token: isSet(object.page_token) ? String(object.page_token) : "",
      page_size: isSet(object.page_size) ? Number(object.page_size) : 0
    };
  },
  toSDK(message: ListExclusionsRequest): ListExclusionsRequestSDKType {
    const obj: any = {};
    obj.parent = message.parent;
    obj.page_token = message.pageToken;
    obj.page_size = message.pageSize;
    return obj;
  },
  fromAmino(object: ListExclusionsRequestAmino): ListExclusionsRequest {
    const message = createBaseListExclusionsRequest();
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    }
    if (object.page_token !== undefined && object.page_token !== null) {
      message.pageToken = object.page_token;
    }
    if (object.page_size !== undefined && object.page_size !== null) {
      message.pageSize = object.page_size;
    }
    return message;
  },
  toAmino(message: ListExclusionsRequest): ListExclusionsRequestAmino {
    const obj: any = {};
    obj.parent = message.parent === "" ? undefined : message.parent;
    obj.page_token = message.pageToken === "" ? undefined : message.pageToken;
    obj.page_size = message.pageSize === 0 ? undefined : message.pageSize;
    return obj;
  },
  fromAminoMsg(object: ListExclusionsRequestAminoMsg): ListExclusionsRequest {
    return ListExclusionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ListExclusionsRequestProtoMsg): ListExclusionsRequest {
    return ListExclusionsRequest.decode(message.value);
  },
  toProto(message: ListExclusionsRequest): Uint8Array {
    return ListExclusionsRequest.encode(message).finish();
  },
  toProtoMsg(message: ListExclusionsRequest): ListExclusionsRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.ListExclusionsRequest",
      value: ListExclusionsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseListExclusionsResponse(): ListExclusionsResponse {
  return {
    exclusions: [],
    nextPageToken: ""
  };
}
export const ListExclusionsResponse = {
  typeUrl: "/google.logging.v2.ListExclusionsResponse",
  is(o: any): o is ListExclusionsResponse {
    return o && (o.$typeUrl === ListExclusionsResponse.typeUrl || Array.isArray(o.exclusions) && (!o.exclusions.length || LogExclusion.is(o.exclusions[0])) && typeof o.nextPageToken === "string");
  },
  isSDK(o: any): o is ListExclusionsResponseSDKType {
    return o && (o.$typeUrl === ListExclusionsResponse.typeUrl || Array.isArray(o.exclusions) && (!o.exclusions.length || LogExclusion.isSDK(o.exclusions[0])) && typeof o.next_page_token === "string");
  },
  isAmino(o: any): o is ListExclusionsResponseAmino {
    return o && (o.$typeUrl === ListExclusionsResponse.typeUrl || Array.isArray(o.exclusions) && (!o.exclusions.length || LogExclusion.isAmino(o.exclusions[0])) && typeof o.next_page_token === "string");
  },
  encode(message: ListExclusionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.exclusions) {
      LogExclusion.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== undefined) {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListExclusionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListExclusionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exclusions.push(LogExclusion.decode(reader, reader.uint32()));
          break;
        case 2:
          message.nextPageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListExclusionsResponse {
    const obj = createBaseListExclusionsResponse();
    if (Array.isArray(object?.exclusions)) obj.exclusions = object.exclusions.map((e: any) => LogExclusion.fromJSON(e));
    if (isSet(object.nextPageToken)) obj.nextPageToken = String(object.nextPageToken);
    return obj;
  },
  toJSON(message: ListExclusionsResponse): JsonSafe<ListExclusionsResponse> {
    const obj: any = {};
    if (message.exclusions) {
      obj.exclusions = message.exclusions.map(e => e ? LogExclusion.toJSON(e) : undefined);
    } else {
      obj.exclusions = [];
    }
    message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
    return obj;
  },
  fromPartial(object: DeepPartial<ListExclusionsResponse>): ListExclusionsResponse {
    const message = createBaseListExclusionsResponse();
    message.exclusions = object.exclusions?.map(e => LogExclusion.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
  fromSDK(object: ListExclusionsResponseSDKType): ListExclusionsResponse {
    return {
      exclusions: Array.isArray(object?.exclusions) ? object.exclusions.map((e: any) => LogExclusion.fromSDK(e)) : [],
      nextPageToken: object?.next_page_token
    };
  },
  fromSDKJSON(object: any): ListExclusionsResponseSDKType {
    return {
      exclusions: Array.isArray(object?.exclusions) ? object.exclusions.map((e: any) => LogExclusion.fromSDKJSON(e)) : [],
      next_page_token: isSet(object.next_page_token) ? String(object.next_page_token) : ""
    };
  },
  toSDK(message: ListExclusionsResponse): ListExclusionsResponseSDKType {
    const obj: any = {};
    if (message.exclusions) {
      obj.exclusions = message.exclusions.map(e => e ? LogExclusion.toSDK(e) : undefined);
    } else {
      obj.exclusions = [];
    }
    obj.next_page_token = message.nextPageToken;
    return obj;
  },
  fromAmino(object: ListExclusionsResponseAmino): ListExclusionsResponse {
    const message = createBaseListExclusionsResponse();
    message.exclusions = object.exclusions?.map(e => LogExclusion.fromAmino(e)) || [];
    if (object.next_page_token !== undefined && object.next_page_token !== null) {
      message.nextPageToken = object.next_page_token;
    }
    return message;
  },
  toAmino(message: ListExclusionsResponse): ListExclusionsResponseAmino {
    const obj: any = {};
    if (message.exclusions) {
      obj.exclusions = message.exclusions.map(e => e ? LogExclusion.toAmino(e) : undefined);
    } else {
      obj.exclusions = message.exclusions;
    }
    obj.next_page_token = message.nextPageToken === "" ? undefined : message.nextPageToken;
    return obj;
  },
  fromAminoMsg(object: ListExclusionsResponseAminoMsg): ListExclusionsResponse {
    return ListExclusionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ListExclusionsResponseProtoMsg): ListExclusionsResponse {
    return ListExclusionsResponse.decode(message.value);
  },
  toProto(message: ListExclusionsResponse): Uint8Array {
    return ListExclusionsResponse.encode(message).finish();
  },
  toProtoMsg(message: ListExclusionsResponse): ListExclusionsResponseProtoMsg {
    return {
      typeUrl: "/google.logging.v2.ListExclusionsResponse",
      value: ListExclusionsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    LogExclusion.registerTypeUrl();
  }
};
function createBaseGetExclusionRequest(): GetExclusionRequest {
  return {
    name: ""
  };
}
export const GetExclusionRequest = {
  typeUrl: "/google.logging.v2.GetExclusionRequest",
  is(o: any): o is GetExclusionRequest {
    return o && (o.$typeUrl === GetExclusionRequest.typeUrl || typeof o.name === "string");
  },
  isSDK(o: any): o is GetExclusionRequestSDKType {
    return o && (o.$typeUrl === GetExclusionRequest.typeUrl || typeof o.name === "string");
  },
  isAmino(o: any): o is GetExclusionRequestAmino {
    return o && (o.$typeUrl === GetExclusionRequest.typeUrl || typeof o.name === "string");
  },
  encode(message: GetExclusionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetExclusionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetExclusionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetExclusionRequest {
    const obj = createBaseGetExclusionRequest();
    if (isSet(object.name)) obj.name = String(object.name);
    return obj;
  },
  toJSON(message: GetExclusionRequest): JsonSafe<GetExclusionRequest> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial(object: DeepPartial<GetExclusionRequest>): GetExclusionRequest {
    const message = createBaseGetExclusionRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromSDK(object: GetExclusionRequestSDKType): GetExclusionRequest {
    return {
      name: object?.name
    };
  },
  fromSDKJSON(object: any): GetExclusionRequestSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toSDK(message: GetExclusionRequest): GetExclusionRequestSDKType {
    const obj: any = {};
    obj.name = message.name;
    return obj;
  },
  fromAmino(object: GetExclusionRequestAmino): GetExclusionRequest {
    const message = createBaseGetExclusionRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: GetExclusionRequest): GetExclusionRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: GetExclusionRequestAminoMsg): GetExclusionRequest {
    return GetExclusionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: GetExclusionRequestProtoMsg): GetExclusionRequest {
    return GetExclusionRequest.decode(message.value);
  },
  toProto(message: GetExclusionRequest): Uint8Array {
    return GetExclusionRequest.encode(message).finish();
  },
  toProtoMsg(message: GetExclusionRequest): GetExclusionRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.GetExclusionRequest",
      value: GetExclusionRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseCreateExclusionRequest(): CreateExclusionRequest {
  return {
    parent: "",
    exclusion: undefined
  };
}
export const CreateExclusionRequest = {
  typeUrl: "/google.logging.v2.CreateExclusionRequest",
  is(o: any): o is CreateExclusionRequest {
    return o && (o.$typeUrl === CreateExclusionRequest.typeUrl || typeof o.parent === "string");
  },
  isSDK(o: any): o is CreateExclusionRequestSDKType {
    return o && (o.$typeUrl === CreateExclusionRequest.typeUrl || typeof o.parent === "string");
  },
  isAmino(o: any): o is CreateExclusionRequestAmino {
    return o && (o.$typeUrl === CreateExclusionRequest.typeUrl || typeof o.parent === "string");
  },
  encode(message: CreateExclusionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parent !== undefined) {
      writer.uint32(10).string(message.parent);
    }
    if (message.exclusion !== undefined) {
      LogExclusion.encode(message.exclusion, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CreateExclusionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateExclusionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.exclusion = LogExclusion.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CreateExclusionRequest {
    const obj = createBaseCreateExclusionRequest();
    if (isSet(object.parent)) obj.parent = String(object.parent);
    if (isSet(object.exclusion)) obj.exclusion = LogExclusion.fromJSON(object.exclusion);
    return obj;
  },
  toJSON(message: CreateExclusionRequest): JsonSafe<CreateExclusionRequest> {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.exclusion !== undefined && (obj.exclusion = message.exclusion ? LogExclusion.toJSON(message.exclusion) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<CreateExclusionRequest>): CreateExclusionRequest {
    const message = createBaseCreateExclusionRequest();
    message.parent = object.parent ?? "";
    if (object.exclusion !== undefined && object.exclusion !== null) {
      message.exclusion = LogExclusion.fromPartial(object.exclusion);
    }
    return message;
  },
  fromSDK(object: CreateExclusionRequestSDKType): CreateExclusionRequest {
    return {
      parent: object?.parent,
      exclusion: object.exclusion ? LogExclusion.fromSDK(object.exclusion) : undefined
    };
  },
  fromSDKJSON(object: any): CreateExclusionRequestSDKType {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      exclusion: isSet(object.exclusion) ? LogExclusion.fromSDKJSON(object.exclusion) : undefined
    };
  },
  toSDK(message: CreateExclusionRequest): CreateExclusionRequestSDKType {
    const obj: any = {};
    obj.parent = message.parent;
    message.exclusion !== undefined && (obj.exclusion = message.exclusion ? LogExclusion.toSDK(message.exclusion) : undefined);
    return obj;
  },
  fromAmino(object: CreateExclusionRequestAmino): CreateExclusionRequest {
    const message = createBaseCreateExclusionRequest();
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    }
    if (object.exclusion !== undefined && object.exclusion !== null) {
      message.exclusion = LogExclusion.fromAmino(object.exclusion);
    }
    return message;
  },
  toAmino(message: CreateExclusionRequest): CreateExclusionRequestAmino {
    const obj: any = {};
    obj.parent = message.parent === "" ? undefined : message.parent;
    obj.exclusion = message.exclusion ? LogExclusion.toAmino(message.exclusion) : undefined;
    return obj;
  },
  fromAminoMsg(object: CreateExclusionRequestAminoMsg): CreateExclusionRequest {
    return CreateExclusionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: CreateExclusionRequestProtoMsg): CreateExclusionRequest {
    return CreateExclusionRequest.decode(message.value);
  },
  toProto(message: CreateExclusionRequest): Uint8Array {
    return CreateExclusionRequest.encode(message).finish();
  },
  toProtoMsg(message: CreateExclusionRequest): CreateExclusionRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.CreateExclusionRequest",
      value: CreateExclusionRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    LogExclusion.registerTypeUrl();
  }
};
function createBaseUpdateExclusionRequest(): UpdateExclusionRequest {
  return {
    name: "",
    exclusion: undefined,
    updateMask: undefined
  };
}
export const UpdateExclusionRequest = {
  typeUrl: "/google.logging.v2.UpdateExclusionRequest",
  is(o: any): o is UpdateExclusionRequest {
    return o && (o.$typeUrl === UpdateExclusionRequest.typeUrl || typeof o.name === "string");
  },
  isSDK(o: any): o is UpdateExclusionRequestSDKType {
    return o && (o.$typeUrl === UpdateExclusionRequest.typeUrl || typeof o.name === "string");
  },
  isAmino(o: any): o is UpdateExclusionRequestAmino {
    return o && (o.$typeUrl === UpdateExclusionRequest.typeUrl || typeof o.name === "string");
  },
  encode(message: UpdateExclusionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.exclusion !== undefined) {
      LogExclusion.encode(message.exclusion, writer.uint32(18).fork()).ldelim();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateExclusionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateExclusionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.exclusion = LogExclusion.decode(reader, reader.uint32());
          break;
        case 3:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpdateExclusionRequest {
    const obj = createBaseUpdateExclusionRequest();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.exclusion)) obj.exclusion = LogExclusion.fromJSON(object.exclusion);
    if (isSet(object.updateMask)) obj.updateMask = FieldMask.fromJSON(object.updateMask);
    return obj;
  },
  toJSON(message: UpdateExclusionRequest): JsonSafe<UpdateExclusionRequest> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.exclusion !== undefined && (obj.exclusion = message.exclusion ? LogExclusion.toJSON(message.exclusion) : undefined);
    message.updateMask !== undefined && (obj.updateMask = message.updateMask ? FieldMask.toJSON(message.updateMask) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<UpdateExclusionRequest>): UpdateExclusionRequest {
    const message = createBaseUpdateExclusionRequest();
    message.name = object.name ?? "";
    if (object.exclusion !== undefined && object.exclusion !== null) {
      message.exclusion = LogExclusion.fromPartial(object.exclusion);
    }
    if (object.updateMask !== undefined && object.updateMask !== null) {
      message.updateMask = FieldMask.fromPartial(object.updateMask);
    }
    return message;
  },
  fromSDK(object: UpdateExclusionRequestSDKType): UpdateExclusionRequest {
    return {
      name: object?.name,
      exclusion: object.exclusion ? LogExclusion.fromSDK(object.exclusion) : undefined,
      updateMask: object.update_mask ? FieldMask.fromSDK(object.update_mask) : undefined
    };
  },
  fromSDKJSON(object: any): UpdateExclusionRequestSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      exclusion: isSet(object.exclusion) ? LogExclusion.fromSDKJSON(object.exclusion) : undefined,
      update_mask: isSet(object.update_mask) ? FieldMask.fromSDKJSON(object.update_mask) : undefined
    };
  },
  toSDK(message: UpdateExclusionRequest): UpdateExclusionRequestSDKType {
    const obj: any = {};
    obj.name = message.name;
    message.exclusion !== undefined && (obj.exclusion = message.exclusion ? LogExclusion.toSDK(message.exclusion) : undefined);
    message.updateMask !== undefined && (obj.update_mask = message.updateMask ? FieldMask.toSDK(message.updateMask) : undefined);
    return obj;
  },
  fromAmino(object: UpdateExclusionRequestAmino): UpdateExclusionRequest {
    const message = createBaseUpdateExclusionRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.exclusion !== undefined && object.exclusion !== null) {
      message.exclusion = LogExclusion.fromAmino(object.exclusion);
    }
    if (object.update_mask !== undefined && object.update_mask !== null) {
      message.updateMask = FieldMask.fromAmino(object.update_mask);
    }
    return message;
  },
  toAmino(message: UpdateExclusionRequest): UpdateExclusionRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.exclusion = message.exclusion ? LogExclusion.toAmino(message.exclusion) : undefined;
    obj.update_mask = message.updateMask ? FieldMask.toAmino(message.updateMask) : undefined;
    return obj;
  },
  fromAminoMsg(object: UpdateExclusionRequestAminoMsg): UpdateExclusionRequest {
    return UpdateExclusionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateExclusionRequestProtoMsg): UpdateExclusionRequest {
    return UpdateExclusionRequest.decode(message.value);
  },
  toProto(message: UpdateExclusionRequest): Uint8Array {
    return UpdateExclusionRequest.encode(message).finish();
  },
  toProtoMsg(message: UpdateExclusionRequest): UpdateExclusionRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.UpdateExclusionRequest",
      value: UpdateExclusionRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    LogExclusion.registerTypeUrl();
    FieldMask.registerTypeUrl();
  }
};
function createBaseDeleteExclusionRequest(): DeleteExclusionRequest {
  return {
    name: ""
  };
}
export const DeleteExclusionRequest = {
  typeUrl: "/google.logging.v2.DeleteExclusionRequest",
  is(o: any): o is DeleteExclusionRequest {
    return o && (o.$typeUrl === DeleteExclusionRequest.typeUrl || typeof o.name === "string");
  },
  isSDK(o: any): o is DeleteExclusionRequestSDKType {
    return o && (o.$typeUrl === DeleteExclusionRequest.typeUrl || typeof o.name === "string");
  },
  isAmino(o: any): o is DeleteExclusionRequestAmino {
    return o && (o.$typeUrl === DeleteExclusionRequest.typeUrl || typeof o.name === "string");
  },
  encode(message: DeleteExclusionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DeleteExclusionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteExclusionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DeleteExclusionRequest {
    const obj = createBaseDeleteExclusionRequest();
    if (isSet(object.name)) obj.name = String(object.name);
    return obj;
  },
  toJSON(message: DeleteExclusionRequest): JsonSafe<DeleteExclusionRequest> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial(object: DeepPartial<DeleteExclusionRequest>): DeleteExclusionRequest {
    const message = createBaseDeleteExclusionRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromSDK(object: DeleteExclusionRequestSDKType): DeleteExclusionRequest {
    return {
      name: object?.name
    };
  },
  fromSDKJSON(object: any): DeleteExclusionRequestSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toSDK(message: DeleteExclusionRequest): DeleteExclusionRequestSDKType {
    const obj: any = {};
    obj.name = message.name;
    return obj;
  },
  fromAmino(object: DeleteExclusionRequestAmino): DeleteExclusionRequest {
    const message = createBaseDeleteExclusionRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: DeleteExclusionRequest): DeleteExclusionRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: DeleteExclusionRequestAminoMsg): DeleteExclusionRequest {
    return DeleteExclusionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: DeleteExclusionRequestProtoMsg): DeleteExclusionRequest {
    return DeleteExclusionRequest.decode(message.value);
  },
  toProto(message: DeleteExclusionRequest): Uint8Array {
    return DeleteExclusionRequest.encode(message).finish();
  },
  toProtoMsg(message: DeleteExclusionRequest): DeleteExclusionRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.DeleteExclusionRequest",
      value: DeleteExclusionRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseGetCmekSettingsRequest(): GetCmekSettingsRequest {
  return {
    name: ""
  };
}
export const GetCmekSettingsRequest = {
  typeUrl: "/google.logging.v2.GetCmekSettingsRequest",
  is(o: any): o is GetCmekSettingsRequest {
    return o && (o.$typeUrl === GetCmekSettingsRequest.typeUrl || typeof o.name === "string");
  },
  isSDK(o: any): o is GetCmekSettingsRequestSDKType {
    return o && (o.$typeUrl === GetCmekSettingsRequest.typeUrl || typeof o.name === "string");
  },
  isAmino(o: any): o is GetCmekSettingsRequestAmino {
    return o && (o.$typeUrl === GetCmekSettingsRequest.typeUrl || typeof o.name === "string");
  },
  encode(message: GetCmekSettingsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetCmekSettingsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCmekSettingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetCmekSettingsRequest {
    const obj = createBaseGetCmekSettingsRequest();
    if (isSet(object.name)) obj.name = String(object.name);
    return obj;
  },
  toJSON(message: GetCmekSettingsRequest): JsonSafe<GetCmekSettingsRequest> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial(object: DeepPartial<GetCmekSettingsRequest>): GetCmekSettingsRequest {
    const message = createBaseGetCmekSettingsRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromSDK(object: GetCmekSettingsRequestSDKType): GetCmekSettingsRequest {
    return {
      name: object?.name
    };
  },
  fromSDKJSON(object: any): GetCmekSettingsRequestSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toSDK(message: GetCmekSettingsRequest): GetCmekSettingsRequestSDKType {
    const obj: any = {};
    obj.name = message.name;
    return obj;
  },
  fromAmino(object: GetCmekSettingsRequestAmino): GetCmekSettingsRequest {
    const message = createBaseGetCmekSettingsRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: GetCmekSettingsRequest): GetCmekSettingsRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: GetCmekSettingsRequestAminoMsg): GetCmekSettingsRequest {
    return GetCmekSettingsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: GetCmekSettingsRequestProtoMsg): GetCmekSettingsRequest {
    return GetCmekSettingsRequest.decode(message.value);
  },
  toProto(message: GetCmekSettingsRequest): Uint8Array {
    return GetCmekSettingsRequest.encode(message).finish();
  },
  toProtoMsg(message: GetCmekSettingsRequest): GetCmekSettingsRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.GetCmekSettingsRequest",
      value: GetCmekSettingsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseUpdateCmekSettingsRequest(): UpdateCmekSettingsRequest {
  return {
    name: "",
    cmekSettings: undefined,
    updateMask: undefined
  };
}
export const UpdateCmekSettingsRequest = {
  typeUrl: "/google.logging.v2.UpdateCmekSettingsRequest",
  is(o: any): o is UpdateCmekSettingsRequest {
    return o && (o.$typeUrl === UpdateCmekSettingsRequest.typeUrl || typeof o.name === "string");
  },
  isSDK(o: any): o is UpdateCmekSettingsRequestSDKType {
    return o && (o.$typeUrl === UpdateCmekSettingsRequest.typeUrl || typeof o.name === "string");
  },
  isAmino(o: any): o is UpdateCmekSettingsRequestAmino {
    return o && (o.$typeUrl === UpdateCmekSettingsRequest.typeUrl || typeof o.name === "string");
  },
  encode(message: UpdateCmekSettingsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.cmekSettings !== undefined) {
      CmekSettings.encode(message.cmekSettings, writer.uint32(18).fork()).ldelim();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateCmekSettingsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateCmekSettingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.cmekSettings = CmekSettings.decode(reader, reader.uint32());
          break;
        case 3:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpdateCmekSettingsRequest {
    const obj = createBaseUpdateCmekSettingsRequest();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.cmekSettings)) obj.cmekSettings = CmekSettings.fromJSON(object.cmekSettings);
    if (isSet(object.updateMask)) obj.updateMask = FieldMask.fromJSON(object.updateMask);
    return obj;
  },
  toJSON(message: UpdateCmekSettingsRequest): JsonSafe<UpdateCmekSettingsRequest> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.cmekSettings !== undefined && (obj.cmekSettings = message.cmekSettings ? CmekSettings.toJSON(message.cmekSettings) : undefined);
    message.updateMask !== undefined && (obj.updateMask = message.updateMask ? FieldMask.toJSON(message.updateMask) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<UpdateCmekSettingsRequest>): UpdateCmekSettingsRequest {
    const message = createBaseUpdateCmekSettingsRequest();
    message.name = object.name ?? "";
    if (object.cmekSettings !== undefined && object.cmekSettings !== null) {
      message.cmekSettings = CmekSettings.fromPartial(object.cmekSettings);
    }
    if (object.updateMask !== undefined && object.updateMask !== null) {
      message.updateMask = FieldMask.fromPartial(object.updateMask);
    }
    return message;
  },
  fromSDK(object: UpdateCmekSettingsRequestSDKType): UpdateCmekSettingsRequest {
    return {
      name: object?.name,
      cmekSettings: object.cmek_settings ? CmekSettings.fromSDK(object.cmek_settings) : undefined,
      updateMask: object.update_mask ? FieldMask.fromSDK(object.update_mask) : undefined
    };
  },
  fromSDKJSON(object: any): UpdateCmekSettingsRequestSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      cmek_settings: isSet(object.cmek_settings) ? CmekSettings.fromSDKJSON(object.cmek_settings) : undefined,
      update_mask: isSet(object.update_mask) ? FieldMask.fromSDKJSON(object.update_mask) : undefined
    };
  },
  toSDK(message: UpdateCmekSettingsRequest): UpdateCmekSettingsRequestSDKType {
    const obj: any = {};
    obj.name = message.name;
    message.cmekSettings !== undefined && (obj.cmek_settings = message.cmekSettings ? CmekSettings.toSDK(message.cmekSettings) : undefined);
    message.updateMask !== undefined && (obj.update_mask = message.updateMask ? FieldMask.toSDK(message.updateMask) : undefined);
    return obj;
  },
  fromAmino(object: UpdateCmekSettingsRequestAmino): UpdateCmekSettingsRequest {
    const message = createBaseUpdateCmekSettingsRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.cmek_settings !== undefined && object.cmek_settings !== null) {
      message.cmekSettings = CmekSettings.fromAmino(object.cmek_settings);
    }
    if (object.update_mask !== undefined && object.update_mask !== null) {
      message.updateMask = FieldMask.fromAmino(object.update_mask);
    }
    return message;
  },
  toAmino(message: UpdateCmekSettingsRequest): UpdateCmekSettingsRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.cmek_settings = message.cmekSettings ? CmekSettings.toAmino(message.cmekSettings) : undefined;
    obj.update_mask = message.updateMask ? FieldMask.toAmino(message.updateMask) : undefined;
    return obj;
  },
  fromAminoMsg(object: UpdateCmekSettingsRequestAminoMsg): UpdateCmekSettingsRequest {
    return UpdateCmekSettingsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateCmekSettingsRequestProtoMsg): UpdateCmekSettingsRequest {
    return UpdateCmekSettingsRequest.decode(message.value);
  },
  toProto(message: UpdateCmekSettingsRequest): Uint8Array {
    return UpdateCmekSettingsRequest.encode(message).finish();
  },
  toProtoMsg(message: UpdateCmekSettingsRequest): UpdateCmekSettingsRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.UpdateCmekSettingsRequest",
      value: UpdateCmekSettingsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    CmekSettings.registerTypeUrl();
    FieldMask.registerTypeUrl();
  }
};
function createBaseCmekSettings(): CmekSettings {
  return {
    name: "",
    kmsKeyName: "",
    serviceAccountId: ""
  };
}
export const CmekSettings = {
  typeUrl: "/google.logging.v2.CmekSettings",
  is(o: any): o is CmekSettings {
    return o && (o.$typeUrl === CmekSettings.typeUrl || typeof o.name === "string" && typeof o.kmsKeyName === "string" && typeof o.serviceAccountId === "string");
  },
  isSDK(o: any): o is CmekSettingsSDKType {
    return o && (o.$typeUrl === CmekSettings.typeUrl || typeof o.name === "string" && typeof o.kms_key_name === "string" && typeof o.service_account_id === "string");
  },
  isAmino(o: any): o is CmekSettingsAmino {
    return o && (o.$typeUrl === CmekSettings.typeUrl || typeof o.name === "string" && typeof o.kms_key_name === "string" && typeof o.service_account_id === "string");
  },
  encode(message: CmekSettings, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.kmsKeyName !== undefined) {
      writer.uint32(18).string(message.kmsKeyName);
    }
    if (message.serviceAccountId !== undefined) {
      writer.uint32(26).string(message.serviceAccountId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CmekSettings {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCmekSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.kmsKeyName = reader.string();
          break;
        case 3:
          message.serviceAccountId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CmekSettings {
    const obj = createBaseCmekSettings();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.kmsKeyName)) obj.kmsKeyName = String(object.kmsKeyName);
    if (isSet(object.serviceAccountId)) obj.serviceAccountId = String(object.serviceAccountId);
    return obj;
  },
  toJSON(message: CmekSettings): JsonSafe<CmekSettings> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.kmsKeyName !== undefined && (obj.kmsKeyName = message.kmsKeyName);
    message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
    return obj;
  },
  fromPartial(object: DeepPartial<CmekSettings>): CmekSettings {
    const message = createBaseCmekSettings();
    message.name = object.name ?? "";
    message.kmsKeyName = object.kmsKeyName ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    return message;
  },
  fromSDK(object: CmekSettingsSDKType): CmekSettings {
    return {
      name: object?.name,
      kmsKeyName: object?.kms_key_name,
      serviceAccountId: object?.service_account_id
    };
  },
  fromSDKJSON(object: any): CmekSettingsSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      kms_key_name: isSet(object.kms_key_name) ? String(object.kms_key_name) : "",
      service_account_id: isSet(object.service_account_id) ? String(object.service_account_id) : ""
    };
  },
  toSDK(message: CmekSettings): CmekSettingsSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.kms_key_name = message.kmsKeyName;
    obj.service_account_id = message.serviceAccountId;
    return obj;
  },
  fromAmino(object: CmekSettingsAmino): CmekSettings {
    const message = createBaseCmekSettings();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.kms_key_name !== undefined && object.kms_key_name !== null) {
      message.kmsKeyName = object.kms_key_name;
    }
    if (object.service_account_id !== undefined && object.service_account_id !== null) {
      message.serviceAccountId = object.service_account_id;
    }
    return message;
  },
  toAmino(message: CmekSettings): CmekSettingsAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.kms_key_name = message.kmsKeyName === "" ? undefined : message.kmsKeyName;
    obj.service_account_id = message.serviceAccountId === "" ? undefined : message.serviceAccountId;
    return obj;
  },
  fromAminoMsg(object: CmekSettingsAminoMsg): CmekSettings {
    return CmekSettings.fromAmino(object.value);
  },
  fromProtoMsg(message: CmekSettingsProtoMsg): CmekSettings {
    return CmekSettings.decode(message.value);
  },
  toProto(message: CmekSettings): Uint8Array {
    return CmekSettings.encode(message).finish();
  },
  toProtoMsg(message: CmekSettings): CmekSettingsProtoMsg {
    return {
      typeUrl: "/google.logging.v2.CmekSettings",
      value: CmekSettings.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseGetSettingsRequest(): GetSettingsRequest {
  return {
    name: ""
  };
}
export const GetSettingsRequest = {
  typeUrl: "/google.logging.v2.GetSettingsRequest",
  is(o: any): o is GetSettingsRequest {
    return o && (o.$typeUrl === GetSettingsRequest.typeUrl || typeof o.name === "string");
  },
  isSDK(o: any): o is GetSettingsRequestSDKType {
    return o && (o.$typeUrl === GetSettingsRequest.typeUrl || typeof o.name === "string");
  },
  isAmino(o: any): o is GetSettingsRequestAmino {
    return o && (o.$typeUrl === GetSettingsRequest.typeUrl || typeof o.name === "string");
  },
  encode(message: GetSettingsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetSettingsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSettingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetSettingsRequest {
    const obj = createBaseGetSettingsRequest();
    if (isSet(object.name)) obj.name = String(object.name);
    return obj;
  },
  toJSON(message: GetSettingsRequest): JsonSafe<GetSettingsRequest> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial(object: DeepPartial<GetSettingsRequest>): GetSettingsRequest {
    const message = createBaseGetSettingsRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromSDK(object: GetSettingsRequestSDKType): GetSettingsRequest {
    return {
      name: object?.name
    };
  },
  fromSDKJSON(object: any): GetSettingsRequestSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toSDK(message: GetSettingsRequest): GetSettingsRequestSDKType {
    const obj: any = {};
    obj.name = message.name;
    return obj;
  },
  fromAmino(object: GetSettingsRequestAmino): GetSettingsRequest {
    const message = createBaseGetSettingsRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: GetSettingsRequest): GetSettingsRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: GetSettingsRequestAminoMsg): GetSettingsRequest {
    return GetSettingsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: GetSettingsRequestProtoMsg): GetSettingsRequest {
    return GetSettingsRequest.decode(message.value);
  },
  toProto(message: GetSettingsRequest): Uint8Array {
    return GetSettingsRequest.encode(message).finish();
  },
  toProtoMsg(message: GetSettingsRequest): GetSettingsRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.GetSettingsRequest",
      value: GetSettingsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseUpdateSettingsRequest(): UpdateSettingsRequest {
  return {
    name: "",
    settings: undefined,
    updateMask: undefined
  };
}
export const UpdateSettingsRequest = {
  typeUrl: "/google.logging.v2.UpdateSettingsRequest",
  is(o: any): o is UpdateSettingsRequest {
    return o && (o.$typeUrl === UpdateSettingsRequest.typeUrl || typeof o.name === "string");
  },
  isSDK(o: any): o is UpdateSettingsRequestSDKType {
    return o && (o.$typeUrl === UpdateSettingsRequest.typeUrl || typeof o.name === "string");
  },
  isAmino(o: any): o is UpdateSettingsRequestAmino {
    return o && (o.$typeUrl === UpdateSettingsRequest.typeUrl || typeof o.name === "string");
  },
  encode(message: UpdateSettingsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.settings !== undefined) {
      Settings.encode(message.settings, writer.uint32(18).fork()).ldelim();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateSettingsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSettingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.settings = Settings.decode(reader, reader.uint32());
          break;
        case 3:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpdateSettingsRequest {
    const obj = createBaseUpdateSettingsRequest();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.settings)) obj.settings = Settings.fromJSON(object.settings);
    if (isSet(object.updateMask)) obj.updateMask = FieldMask.fromJSON(object.updateMask);
    return obj;
  },
  toJSON(message: UpdateSettingsRequest): JsonSafe<UpdateSettingsRequest> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.settings !== undefined && (obj.settings = message.settings ? Settings.toJSON(message.settings) : undefined);
    message.updateMask !== undefined && (obj.updateMask = message.updateMask ? FieldMask.toJSON(message.updateMask) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<UpdateSettingsRequest>): UpdateSettingsRequest {
    const message = createBaseUpdateSettingsRequest();
    message.name = object.name ?? "";
    if (object.settings !== undefined && object.settings !== null) {
      message.settings = Settings.fromPartial(object.settings);
    }
    if (object.updateMask !== undefined && object.updateMask !== null) {
      message.updateMask = FieldMask.fromPartial(object.updateMask);
    }
    return message;
  },
  fromSDK(object: UpdateSettingsRequestSDKType): UpdateSettingsRequest {
    return {
      name: object?.name,
      settings: object.settings ? Settings.fromSDK(object.settings) : undefined,
      updateMask: object.update_mask ? FieldMask.fromSDK(object.update_mask) : undefined
    };
  },
  fromSDKJSON(object: any): UpdateSettingsRequestSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      settings: isSet(object.settings) ? Settings.fromSDKJSON(object.settings) : undefined,
      update_mask: isSet(object.update_mask) ? FieldMask.fromSDKJSON(object.update_mask) : undefined
    };
  },
  toSDK(message: UpdateSettingsRequest): UpdateSettingsRequestSDKType {
    const obj: any = {};
    obj.name = message.name;
    message.settings !== undefined && (obj.settings = message.settings ? Settings.toSDK(message.settings) : undefined);
    message.updateMask !== undefined && (obj.update_mask = message.updateMask ? FieldMask.toSDK(message.updateMask) : undefined);
    return obj;
  },
  fromAmino(object: UpdateSettingsRequestAmino): UpdateSettingsRequest {
    const message = createBaseUpdateSettingsRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.settings !== undefined && object.settings !== null) {
      message.settings = Settings.fromAmino(object.settings);
    }
    if (object.update_mask !== undefined && object.update_mask !== null) {
      message.updateMask = FieldMask.fromAmino(object.update_mask);
    }
    return message;
  },
  toAmino(message: UpdateSettingsRequest): UpdateSettingsRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.settings = message.settings ? Settings.toAmino(message.settings) : undefined;
    obj.update_mask = message.updateMask ? FieldMask.toAmino(message.updateMask) : undefined;
    return obj;
  },
  fromAminoMsg(object: UpdateSettingsRequestAminoMsg): UpdateSettingsRequest {
    return UpdateSettingsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateSettingsRequestProtoMsg): UpdateSettingsRequest {
    return UpdateSettingsRequest.decode(message.value);
  },
  toProto(message: UpdateSettingsRequest): Uint8Array {
    return UpdateSettingsRequest.encode(message).finish();
  },
  toProtoMsg(message: UpdateSettingsRequest): UpdateSettingsRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.UpdateSettingsRequest",
      value: UpdateSettingsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Settings.registerTypeUrl();
    FieldMask.registerTypeUrl();
  }
};
function createBaseSettings(): Settings {
  return {
    name: "",
    kmsKeyName: "",
    kmsServiceAccountId: "",
    storageLocation: "",
    disableDefaultSink: false
  };
}
export const Settings = {
  typeUrl: "/google.logging.v2.Settings",
  is(o: any): o is Settings {
    return o && (o.$typeUrl === Settings.typeUrl || typeof o.name === "string" && typeof o.kmsKeyName === "string" && typeof o.kmsServiceAccountId === "string" && typeof o.storageLocation === "string" && typeof o.disableDefaultSink === "boolean");
  },
  isSDK(o: any): o is SettingsSDKType {
    return o && (o.$typeUrl === Settings.typeUrl || typeof o.name === "string" && typeof o.kms_key_name === "string" && typeof o.kms_service_account_id === "string" && typeof o.storage_location === "string" && typeof o.disable_default_sink === "boolean");
  },
  isAmino(o: any): o is SettingsAmino {
    return o && (o.$typeUrl === Settings.typeUrl || typeof o.name === "string" && typeof o.kms_key_name === "string" && typeof o.kms_service_account_id === "string" && typeof o.storage_location === "string" && typeof o.disable_default_sink === "boolean");
  },
  encode(message: Settings, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.kmsKeyName !== undefined) {
      writer.uint32(18).string(message.kmsKeyName);
    }
    if (message.kmsServiceAccountId !== undefined) {
      writer.uint32(26).string(message.kmsServiceAccountId);
    }
    if (message.storageLocation !== undefined) {
      writer.uint32(34).string(message.storageLocation);
    }
    if (message.disableDefaultSink !== undefined) {
      writer.uint32(40).bool(message.disableDefaultSink);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Settings {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.kmsKeyName = reader.string();
          break;
        case 3:
          message.kmsServiceAccountId = reader.string();
          break;
        case 4:
          message.storageLocation = reader.string();
          break;
        case 5:
          message.disableDefaultSink = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Settings {
    const obj = createBaseSettings();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.kmsKeyName)) obj.kmsKeyName = String(object.kmsKeyName);
    if (isSet(object.kmsServiceAccountId)) obj.kmsServiceAccountId = String(object.kmsServiceAccountId);
    if (isSet(object.storageLocation)) obj.storageLocation = String(object.storageLocation);
    if (isSet(object.disableDefaultSink)) obj.disableDefaultSink = Boolean(object.disableDefaultSink);
    return obj;
  },
  toJSON(message: Settings): JsonSafe<Settings> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.kmsKeyName !== undefined && (obj.kmsKeyName = message.kmsKeyName);
    message.kmsServiceAccountId !== undefined && (obj.kmsServiceAccountId = message.kmsServiceAccountId);
    message.storageLocation !== undefined && (obj.storageLocation = message.storageLocation);
    message.disableDefaultSink !== undefined && (obj.disableDefaultSink = message.disableDefaultSink);
    return obj;
  },
  fromPartial(object: DeepPartial<Settings>): Settings {
    const message = createBaseSettings();
    message.name = object.name ?? "";
    message.kmsKeyName = object.kmsKeyName ?? "";
    message.kmsServiceAccountId = object.kmsServiceAccountId ?? "";
    message.storageLocation = object.storageLocation ?? "";
    message.disableDefaultSink = object.disableDefaultSink ?? false;
    return message;
  },
  fromSDK(object: SettingsSDKType): Settings {
    return {
      name: object?.name,
      kmsKeyName: object?.kms_key_name,
      kmsServiceAccountId: object?.kms_service_account_id,
      storageLocation: object?.storage_location,
      disableDefaultSink: object?.disable_default_sink
    };
  },
  fromSDKJSON(object: any): SettingsSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      kms_key_name: isSet(object.kms_key_name) ? String(object.kms_key_name) : "",
      kms_service_account_id: isSet(object.kms_service_account_id) ? String(object.kms_service_account_id) : "",
      storage_location: isSet(object.storage_location) ? String(object.storage_location) : "",
      disable_default_sink: isSet(object.disable_default_sink) ? Boolean(object.disable_default_sink) : false
    };
  },
  toSDK(message: Settings): SettingsSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.kms_key_name = message.kmsKeyName;
    obj.kms_service_account_id = message.kmsServiceAccountId;
    obj.storage_location = message.storageLocation;
    obj.disable_default_sink = message.disableDefaultSink;
    return obj;
  },
  fromAmino(object: SettingsAmino): Settings {
    const message = createBaseSettings();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.kms_key_name !== undefined && object.kms_key_name !== null) {
      message.kmsKeyName = object.kms_key_name;
    }
    if (object.kms_service_account_id !== undefined && object.kms_service_account_id !== null) {
      message.kmsServiceAccountId = object.kms_service_account_id;
    }
    if (object.storage_location !== undefined && object.storage_location !== null) {
      message.storageLocation = object.storage_location;
    }
    if (object.disable_default_sink !== undefined && object.disable_default_sink !== null) {
      message.disableDefaultSink = object.disable_default_sink;
    }
    return message;
  },
  toAmino(message: Settings): SettingsAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.kms_key_name = message.kmsKeyName === "" ? undefined : message.kmsKeyName;
    obj.kms_service_account_id = message.kmsServiceAccountId === "" ? undefined : message.kmsServiceAccountId;
    obj.storage_location = message.storageLocation === "" ? undefined : message.storageLocation;
    obj.disable_default_sink = message.disableDefaultSink === false ? undefined : message.disableDefaultSink;
    return obj;
  },
  fromAminoMsg(object: SettingsAminoMsg): Settings {
    return Settings.fromAmino(object.value);
  },
  fromProtoMsg(message: SettingsProtoMsg): Settings {
    return Settings.decode(message.value);
  },
  toProto(message: Settings): Uint8Array {
    return Settings.encode(message).finish();
  },
  toProtoMsg(message: Settings): SettingsProtoMsg {
    return {
      typeUrl: "/google.logging.v2.Settings",
      value: Settings.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseCopyLogEntriesRequest(): CopyLogEntriesRequest {
  return {
    name: "",
    filter: "",
    destination: ""
  };
}
export const CopyLogEntriesRequest = {
  typeUrl: "/google.logging.v2.CopyLogEntriesRequest",
  is(o: any): o is CopyLogEntriesRequest {
    return o && (o.$typeUrl === CopyLogEntriesRequest.typeUrl || typeof o.name === "string" && typeof o.filter === "string" && typeof o.destination === "string");
  },
  isSDK(o: any): o is CopyLogEntriesRequestSDKType {
    return o && (o.$typeUrl === CopyLogEntriesRequest.typeUrl || typeof o.name === "string" && typeof o.filter === "string" && typeof o.destination === "string");
  },
  isAmino(o: any): o is CopyLogEntriesRequestAmino {
    return o && (o.$typeUrl === CopyLogEntriesRequest.typeUrl || typeof o.name === "string" && typeof o.filter === "string" && typeof o.destination === "string");
  },
  encode(message: CopyLogEntriesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.filter !== undefined) {
      writer.uint32(26).string(message.filter);
    }
    if (message.destination !== undefined) {
      writer.uint32(34).string(message.destination);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CopyLogEntriesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCopyLogEntriesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 3:
          message.filter = reader.string();
          break;
        case 4:
          message.destination = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CopyLogEntriesRequest {
    const obj = createBaseCopyLogEntriesRequest();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.filter)) obj.filter = String(object.filter);
    if (isSet(object.destination)) obj.destination = String(object.destination);
    return obj;
  },
  toJSON(message: CopyLogEntriesRequest): JsonSafe<CopyLogEntriesRequest> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.filter !== undefined && (obj.filter = message.filter);
    message.destination !== undefined && (obj.destination = message.destination);
    return obj;
  },
  fromPartial(object: DeepPartial<CopyLogEntriesRequest>): CopyLogEntriesRequest {
    const message = createBaseCopyLogEntriesRequest();
    message.name = object.name ?? "";
    message.filter = object.filter ?? "";
    message.destination = object.destination ?? "";
    return message;
  },
  fromSDK(object: CopyLogEntriesRequestSDKType): CopyLogEntriesRequest {
    return {
      name: object?.name,
      filter: object?.filter,
      destination: object?.destination
    };
  },
  fromSDKJSON(object: any): CopyLogEntriesRequestSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      filter: isSet(object.filter) ? String(object.filter) : "",
      destination: isSet(object.destination) ? String(object.destination) : ""
    };
  },
  toSDK(message: CopyLogEntriesRequest): CopyLogEntriesRequestSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.filter = message.filter;
    obj.destination = message.destination;
    return obj;
  },
  fromAmino(object: CopyLogEntriesRequestAmino): CopyLogEntriesRequest {
    const message = createBaseCopyLogEntriesRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.filter !== undefined && object.filter !== null) {
      message.filter = object.filter;
    }
    if (object.destination !== undefined && object.destination !== null) {
      message.destination = object.destination;
    }
    return message;
  },
  toAmino(message: CopyLogEntriesRequest): CopyLogEntriesRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.filter = message.filter === "" ? undefined : message.filter;
    obj.destination = message.destination === "" ? undefined : message.destination;
    return obj;
  },
  fromAminoMsg(object: CopyLogEntriesRequestAminoMsg): CopyLogEntriesRequest {
    return CopyLogEntriesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: CopyLogEntriesRequestProtoMsg): CopyLogEntriesRequest {
    return CopyLogEntriesRequest.decode(message.value);
  },
  toProto(message: CopyLogEntriesRequest): Uint8Array {
    return CopyLogEntriesRequest.encode(message).finish();
  },
  toProtoMsg(message: CopyLogEntriesRequest): CopyLogEntriesRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.CopyLogEntriesRequest",
      value: CopyLogEntriesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseCopyLogEntriesMetadata(): CopyLogEntriesMetadata {
  return {
    startTime: undefined,
    endTime: undefined,
    state: 0,
    cancellationRequested: false,
    request: undefined,
    progress: 0,
    writerIdentity: ""
  };
}
export const CopyLogEntriesMetadata = {
  typeUrl: "/google.logging.v2.CopyLogEntriesMetadata",
  is(o: any): o is CopyLogEntriesMetadata {
    return o && (o.$typeUrl === CopyLogEntriesMetadata.typeUrl || isSet(o.state) && typeof o.cancellationRequested === "boolean" && typeof o.progress === "number" && typeof o.writerIdentity === "string");
  },
  isSDK(o: any): o is CopyLogEntriesMetadataSDKType {
    return o && (o.$typeUrl === CopyLogEntriesMetadata.typeUrl || isSet(o.state) && typeof o.cancellation_requested === "boolean" && typeof o.progress === "number" && typeof o.writer_identity === "string");
  },
  isAmino(o: any): o is CopyLogEntriesMetadataAmino {
    return o && (o.$typeUrl === CopyLogEntriesMetadata.typeUrl || isSet(o.state) && typeof o.cancellation_requested === "boolean" && typeof o.progress === "number" && typeof o.writer_identity === "string");
  },
  encode(message: CopyLogEntriesMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(10).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    if (message.cancellationRequested !== undefined) {
      writer.uint32(32).bool(message.cancellationRequested);
    }
    if (message.request !== undefined) {
      CopyLogEntriesRequest.encode(message.request, writer.uint32(42).fork()).ldelim();
    }
    if (message.progress !== undefined) {
      writer.uint32(48).int32(message.progress);
    }
    if (message.writerIdentity !== undefined) {
      writer.uint32(58).string(message.writerIdentity);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CopyLogEntriesMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCopyLogEntriesMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.state = (reader.int32() as any);
          break;
        case 4:
          message.cancellationRequested = reader.bool();
          break;
        case 5:
          message.request = CopyLogEntriesRequest.decode(reader, reader.uint32());
          break;
        case 6:
          message.progress = reader.int32();
          break;
        case 7:
          message.writerIdentity = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CopyLogEntriesMetadata {
    const obj = createBaseCopyLogEntriesMetadata();
    if (isSet(object.startTime)) obj.startTime = new Date(object.startTime);
    if (isSet(object.endTime)) obj.endTime = new Date(object.endTime);
    if (isSet(object.state)) obj.state = operationStateFromJSON(object.state);
    if (isSet(object.cancellationRequested)) obj.cancellationRequested = Boolean(object.cancellationRequested);
    if (isSet(object.request)) obj.request = CopyLogEntriesRequest.fromJSON(object.request);
    if (isSet(object.progress)) obj.progress = Number(object.progress);
    if (isSet(object.writerIdentity)) obj.writerIdentity = String(object.writerIdentity);
    return obj;
  },
  toJSON(message: CopyLogEntriesMetadata): JsonSafe<CopyLogEntriesMetadata> {
    const obj: any = {};
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    message.endTime !== undefined && (obj.endTime = message.endTime.toISOString());
    message.state !== undefined && (obj.state = operationStateToJSON(message.state));
    message.cancellationRequested !== undefined && (obj.cancellationRequested = message.cancellationRequested);
    message.request !== undefined && (obj.request = message.request ? CopyLogEntriesRequest.toJSON(message.request) : undefined);
    message.progress !== undefined && (obj.progress = Math.round(message.progress));
    message.writerIdentity !== undefined && (obj.writerIdentity = message.writerIdentity);
    return obj;
  },
  fromPartial(object: DeepPartial<CopyLogEntriesMetadata>): CopyLogEntriesMetadata {
    const message = createBaseCopyLogEntriesMetadata();
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.state = object.state ?? 0;
    message.cancellationRequested = object.cancellationRequested ?? false;
    if (object.request !== undefined && object.request !== null) {
      message.request = CopyLogEntriesRequest.fromPartial(object.request);
    }
    message.progress = object.progress ?? 0;
    message.writerIdentity = object.writerIdentity ?? "";
    return message;
  },
  fromSDK(object: CopyLogEntriesMetadataSDKType): CopyLogEntriesMetadata {
    return {
      startTime: object.start_time ?? undefined,
      endTime: object.end_time ?? undefined,
      state: isSet(object.state) ? operationStateFromJSON(object.state) : -1,
      cancellationRequested: object?.cancellation_requested,
      request: object.request ? CopyLogEntriesRequest.fromSDK(object.request) : undefined,
      progress: object?.progress,
      writerIdentity: object?.writer_identity
    };
  },
  fromSDKJSON(object: any): CopyLogEntriesMetadataSDKType {
    return {
      start_time: isSet(object.start_time) ? new Date(object.start_time) : undefined,
      end_time: isSet(object.end_time) ? new Date(object.end_time) : undefined,
      state: isSet(object.state) ? operationStateFromJSON(object.state) : -1,
      cancellation_requested: isSet(object.cancellation_requested) ? Boolean(object.cancellation_requested) : false,
      request: isSet(object.request) ? CopyLogEntriesRequest.fromSDKJSON(object.request) : undefined,
      progress: isSet(object.progress) ? Number(object.progress) : 0,
      writer_identity: isSet(object.writer_identity) ? String(object.writer_identity) : ""
    };
  },
  toSDK(message: CopyLogEntriesMetadata): CopyLogEntriesMetadataSDKType {
    const obj: any = {};
    message.startTime !== undefined && (obj.start_time = message.startTime ?? undefined);
    message.endTime !== undefined && (obj.end_time = message.endTime ?? undefined);
    message.state !== undefined && (obj.state = operationStateToJSON(message.state));
    obj.cancellation_requested = message.cancellationRequested;
    message.request !== undefined && (obj.request = message.request ? CopyLogEntriesRequest.toSDK(message.request) : undefined);
    obj.progress = message.progress;
    obj.writer_identity = message.writerIdentity;
    return obj;
  },
  fromAmino(object: CopyLogEntriesMetadataAmino): CopyLogEntriesMetadata {
    const message = createBaseCopyLogEntriesMetadata();
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = fromTimestamp(Timestamp.fromAmino(object.end_time));
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.cancellation_requested !== undefined && object.cancellation_requested !== null) {
      message.cancellationRequested = object.cancellation_requested;
    }
    if (object.request !== undefined && object.request !== null) {
      message.request = CopyLogEntriesRequest.fromAmino(object.request);
    }
    if (object.progress !== undefined && object.progress !== null) {
      message.progress = object.progress;
    }
    if (object.writer_identity !== undefined && object.writer_identity !== null) {
      message.writerIdentity = object.writer_identity;
    }
    return message;
  },
  toAmino(message: CopyLogEntriesMetadata): CopyLogEntriesMetadataAmino {
    const obj: any = {};
    obj.start_time = message.startTime ? Timestamp.toAmino(toTimestamp(message.startTime)) : undefined;
    obj.end_time = message.endTime ? Timestamp.toAmino(toTimestamp(message.endTime)) : undefined;
    obj.state = message.state === 0 ? undefined : message.state;
    obj.cancellation_requested = message.cancellationRequested === false ? undefined : message.cancellationRequested;
    obj.request = message.request ? CopyLogEntriesRequest.toAmino(message.request) : undefined;
    obj.progress = message.progress === 0 ? undefined : message.progress;
    obj.writer_identity = message.writerIdentity === "" ? undefined : message.writerIdentity;
    return obj;
  },
  fromAminoMsg(object: CopyLogEntriesMetadataAminoMsg): CopyLogEntriesMetadata {
    return CopyLogEntriesMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: CopyLogEntriesMetadataProtoMsg): CopyLogEntriesMetadata {
    return CopyLogEntriesMetadata.decode(message.value);
  },
  toProto(message: CopyLogEntriesMetadata): Uint8Array {
    return CopyLogEntriesMetadata.encode(message).finish();
  },
  toProtoMsg(message: CopyLogEntriesMetadata): CopyLogEntriesMetadataProtoMsg {
    return {
      typeUrl: "/google.logging.v2.CopyLogEntriesMetadata",
      value: CopyLogEntriesMetadata.encode(message).finish()
    };
  },
  registerTypeUrl() {
    CopyLogEntriesRequest.registerTypeUrl();
  }
};
function createBaseCopyLogEntriesResponse(): CopyLogEntriesResponse {
  return {
    logEntriesCopiedCount: BigInt(0)
  };
}
export const CopyLogEntriesResponse = {
  typeUrl: "/google.logging.v2.CopyLogEntriesResponse",
  is(o: any): o is CopyLogEntriesResponse {
    return o && (o.$typeUrl === CopyLogEntriesResponse.typeUrl || typeof o.logEntriesCopiedCount === "bigint");
  },
  isSDK(o: any): o is CopyLogEntriesResponseSDKType {
    return o && (o.$typeUrl === CopyLogEntriesResponse.typeUrl || typeof o.log_entries_copied_count === "bigint");
  },
  isAmino(o: any): o is CopyLogEntriesResponseAmino {
    return o && (o.$typeUrl === CopyLogEntriesResponse.typeUrl || typeof o.log_entries_copied_count === "bigint");
  },
  encode(message: CopyLogEntriesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.logEntriesCopiedCount !== undefined) {
      writer.uint32(8).int64(message.logEntriesCopiedCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CopyLogEntriesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCopyLogEntriesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.logEntriesCopiedCount = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CopyLogEntriesResponse {
    const obj = createBaseCopyLogEntriesResponse();
    if (isSet(object.logEntriesCopiedCount)) obj.logEntriesCopiedCount = BigInt(object.logEntriesCopiedCount.toString());
    return obj;
  },
  toJSON(message: CopyLogEntriesResponse): JsonSafe<CopyLogEntriesResponse> {
    const obj: any = {};
    message.logEntriesCopiedCount !== undefined && (obj.logEntriesCopiedCount = (message.logEntriesCopiedCount || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<CopyLogEntriesResponse>): CopyLogEntriesResponse {
    const message = createBaseCopyLogEntriesResponse();
    if (object.logEntriesCopiedCount !== undefined && object.logEntriesCopiedCount !== null) {
      message.logEntriesCopiedCount = BigInt(object.logEntriesCopiedCount.toString());
    }
    return message;
  },
  fromSDK(object: CopyLogEntriesResponseSDKType): CopyLogEntriesResponse {
    return {
      logEntriesCopiedCount: object?.log_entries_copied_count
    };
  },
  fromSDKJSON(object: any): CopyLogEntriesResponseSDKType {
    return {
      log_entries_copied_count: isSet(object.log_entries_copied_count) ? BigInt(object.log_entries_copied_count.toString()) : BigInt(0)
    };
  },
  toSDK(message: CopyLogEntriesResponse): CopyLogEntriesResponseSDKType {
    const obj: any = {};
    obj.log_entries_copied_count = message.logEntriesCopiedCount;
    return obj;
  },
  fromAmino(object: CopyLogEntriesResponseAmino): CopyLogEntriesResponse {
    const message = createBaseCopyLogEntriesResponse();
    if (object.log_entries_copied_count !== undefined && object.log_entries_copied_count !== null) {
      message.logEntriesCopiedCount = BigInt(object.log_entries_copied_count);
    }
    return message;
  },
  toAmino(message: CopyLogEntriesResponse): CopyLogEntriesResponseAmino {
    const obj: any = {};
    obj.log_entries_copied_count = message.logEntriesCopiedCount !== BigInt(0) ? message.logEntriesCopiedCount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: CopyLogEntriesResponseAminoMsg): CopyLogEntriesResponse {
    return CopyLogEntriesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: CopyLogEntriesResponseProtoMsg): CopyLogEntriesResponse {
    return CopyLogEntriesResponse.decode(message.value);
  },
  toProto(message: CopyLogEntriesResponse): Uint8Array {
    return CopyLogEntriesResponse.encode(message).finish();
  },
  toProtoMsg(message: CopyLogEntriesResponse): CopyLogEntriesResponseProtoMsg {
    return {
      typeUrl: "/google.logging.v2.CopyLogEntriesResponse",
      value: CopyLogEntriesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};