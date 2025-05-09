import { MonitoredResource, MonitoredResourceAmino, MonitoredResourceDescriptor, MonitoredResourceDescriptorAmino } from "../../api/monitored_resource";
import { LogEntry, LogEntryAmino } from "./log_entry";
import { Duration, DurationAmino } from "../../protobuf/duration";
import { Status, StatusAmino } from "../../rpc/status";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** An indicator of why entries were omitted. */
export enum TailLogEntriesResponse_SuppressionInfo_Reason {
  /** REASON_UNSPECIFIED - Unexpected default. */
  REASON_UNSPECIFIED = 0,
  /**
   * RATE_LIMIT - Indicates suppression occurred due to relevant entries being
   * received in excess of rate limits. For quotas and limits, see
   * [Logging API quotas and
   * limits](https://cloud.google.com/logging/quotas#api-limits).
   */
  RATE_LIMIT = 1,
  /**
   * NOT_CONSUMED - Indicates suppression occurred due to the client not consuming
   * responses quickly enough.
   */
  NOT_CONSUMED = 2,
  UNRECOGNIZED = -1,
}
export const TailLogEntriesResponse_SuppressionInfo_ReasonAmino = TailLogEntriesResponse_SuppressionInfo_Reason;
export function tailLogEntriesResponse_SuppressionInfo_ReasonFromJSON(object: any): TailLogEntriesResponse_SuppressionInfo_Reason {
  switch (object) {
    case 0:
    case "REASON_UNSPECIFIED":
      return TailLogEntriesResponse_SuppressionInfo_Reason.REASON_UNSPECIFIED;
    case 1:
    case "RATE_LIMIT":
      return TailLogEntriesResponse_SuppressionInfo_Reason.RATE_LIMIT;
    case 2:
    case "NOT_CONSUMED":
      return TailLogEntriesResponse_SuppressionInfo_Reason.NOT_CONSUMED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TailLogEntriesResponse_SuppressionInfo_Reason.UNRECOGNIZED;
  }
}
export function tailLogEntriesResponse_SuppressionInfo_ReasonToJSON(object: TailLogEntriesResponse_SuppressionInfo_Reason): string {
  switch (object) {
    case TailLogEntriesResponse_SuppressionInfo_Reason.REASON_UNSPECIFIED:
      return "REASON_UNSPECIFIED";
    case TailLogEntriesResponse_SuppressionInfo_Reason.RATE_LIMIT:
      return "RATE_LIMIT";
    case TailLogEntriesResponse_SuppressionInfo_Reason.NOT_CONSUMED:
      return "NOT_CONSUMED";
    case TailLogEntriesResponse_SuppressionInfo_Reason.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** The parameters to DeleteLog. */
export interface DeleteLogRequest {
  /**
   * Required. The resource name of the log to delete:
   * 
   * * `projects/[PROJECT_ID]/logs/[LOG_ID]`
   * * `organizations/[ORGANIZATION_ID]/logs/[LOG_ID]`
   * * `billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]`
   * * `folders/[FOLDER_ID]/logs/[LOG_ID]`
   * 
   * `[LOG_ID]` must be URL-encoded. For example,
   * `"projects/my-project-id/logs/syslog"`,
   * `"organizations/123/logs/cloudaudit.googleapis.com%2Factivity"`.
   * 
   * For more information about log names, see
   * [LogEntry][google.logging.v2.LogEntry].
   */
  logName: string;
}
export interface DeleteLogRequestProtoMsg {
  typeUrl: "/google.logging.v2.DeleteLogRequest";
  value: Uint8Array;
}
/** The parameters to DeleteLog. */
export interface DeleteLogRequestAmino {
  /**
   * Required. The resource name of the log to delete:
   * 
   * * `projects/[PROJECT_ID]/logs/[LOG_ID]`
   * * `organizations/[ORGANIZATION_ID]/logs/[LOG_ID]`
   * * `billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]`
   * * `folders/[FOLDER_ID]/logs/[LOG_ID]`
   * 
   * `[LOG_ID]` must be URL-encoded. For example,
   * `"projects/my-project-id/logs/syslog"`,
   * `"organizations/123/logs/cloudaudit.googleapis.com%2Factivity"`.
   * 
   * For more information about log names, see
   * [LogEntry][google.logging.v2.LogEntry].
   */
  log_name: string;
}
export interface DeleteLogRequestAminoMsg {
  type: "/google.logging.v2.DeleteLogRequest";
  value: DeleteLogRequestAmino;
}
export interface WriteLogEntriesRequest_LabelsEntry {
  key: string;
  value: string;
}
export interface WriteLogEntriesRequest_LabelsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface WriteLogEntriesRequest_LabelsEntryAmino {
  key: string;
  value: string;
}
export interface WriteLogEntriesRequest_LabelsEntryAminoMsg {
  type: string;
  value: WriteLogEntriesRequest_LabelsEntryAmino;
}
/** The parameters to WriteLogEntries. */
export interface WriteLogEntriesRequest {
  /**
   * Optional. A default log resource name that is assigned to all log entries
   * in `entries` that do not specify a value for `log_name`:
   * 
   * * `projects/[PROJECT_ID]/logs/[LOG_ID]`
   * * `organizations/[ORGANIZATION_ID]/logs/[LOG_ID]`
   * * `billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]`
   * * `folders/[FOLDER_ID]/logs/[LOG_ID]`
   * 
   * `[LOG_ID]` must be URL-encoded. For example:
   * 
   *     "projects/my-project-id/logs/syslog"
   *     "organizations/123/logs/cloudaudit.googleapis.com%2Factivity"
   * 
   * The permission `logging.logEntries.create` is needed on each project,
   * organization, billing account, or folder that is receiving new log
   * entries, whether the resource is specified in `logName` or in an
   * individual log entry.
   */
  logName: string;
  /**
   * Optional. A default monitored resource object that is assigned to all log
   * entries in `entries` that do not specify a value for `resource`. Example:
   * 
   *     { "type": "gce_instance",
   *       "labels": {
   *         "zone": "us-central1-a", "instance_id": "00000000000000000000" }}
   * 
   * See [LogEntry][google.logging.v2.LogEntry].
   */
  resource?: MonitoredResource;
  /**
   * Optional. Default labels that are added to the `labels` field of all log
   * entries in `entries`. If a log entry already has a label with the same key
   * as a label in this parameter, then the log entry's label is not changed.
   * See [LogEntry][google.logging.v2.LogEntry].
   */
  labels: {
    [key: string]: string;
  };
  /**
   * Required. The log entries to send to Logging. The order of log
   * entries in this list does not matter. Values supplied in this method's
   * `log_name`, `resource`, and `labels` fields are copied into those log
   * entries in this list that do not include values for their corresponding
   * fields. For more information, see the
   * [LogEntry][google.logging.v2.LogEntry] type.
   * 
   * If the `timestamp` or `insert_id` fields are missing in log entries, then
   * this method supplies the current time or a unique identifier, respectively.
   * The supplied values are chosen so that, among the log entries that did not
   * supply their own values, the entries earlier in the list will sort before
   * the entries later in the list. See the `entries.list` method.
   * 
   * Log entries with timestamps that are more than the
   * [logs retention period](https://cloud.google.com/logging/quotas) in
   * the past or more than 24 hours in the future will not be available when
   * calling `entries.list`. However, those log entries can still be [exported
   * with
   * LogSinks](https://cloud.google.com/logging/docs/api/tasks/exporting-logs).
   * 
   * To improve throughput and to avoid exceeding the
   * [quota limit](https://cloud.google.com/logging/quotas) for calls to
   * `entries.write`, you should try to include several log entries in this
   * list, rather than calling this method for each individual log entry.
   */
  entries: LogEntry[];
  /**
   * Optional. Whether valid entries should be written even if some other
   * entries fail due to INVALID_ARGUMENT or PERMISSION_DENIED errors. If any
   * entry is not written, then the response status is the error associated
   * with one of the failed entries and the response includes error details
   * keyed by the entries' zero-based index in the `entries.write` method.
   */
  partialSuccess: boolean;
  /**
   * Optional. If true, the request should expect normal response, but the
   * entries won't be persisted nor exported. Useful for checking whether the
   * logging API endpoints are working properly before sending valuable data.
   */
  dryRun: boolean;
}
export interface WriteLogEntriesRequestProtoMsg {
  typeUrl: "/google.logging.v2.WriteLogEntriesRequest";
  value: Uint8Array;
}
/** The parameters to WriteLogEntries. */
export interface WriteLogEntriesRequestAmino {
  /**
   * Optional. A default log resource name that is assigned to all log entries
   * in `entries` that do not specify a value for `log_name`:
   * 
   * * `projects/[PROJECT_ID]/logs/[LOG_ID]`
   * * `organizations/[ORGANIZATION_ID]/logs/[LOG_ID]`
   * * `billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]`
   * * `folders/[FOLDER_ID]/logs/[LOG_ID]`
   * 
   * `[LOG_ID]` must be URL-encoded. For example:
   * 
   *     "projects/my-project-id/logs/syslog"
   *     "organizations/123/logs/cloudaudit.googleapis.com%2Factivity"
   * 
   * The permission `logging.logEntries.create` is needed on each project,
   * organization, billing account, or folder that is receiving new log
   * entries, whether the resource is specified in `logName` or in an
   * individual log entry.
   */
  log_name: string;
  /**
   * Optional. A default monitored resource object that is assigned to all log
   * entries in `entries` that do not specify a value for `resource`. Example:
   * 
   *     { "type": "gce_instance",
   *       "labels": {
   *         "zone": "us-central1-a", "instance_id": "00000000000000000000" }}
   * 
   * See [LogEntry][google.logging.v2.LogEntry].
   */
  resource?: MonitoredResourceAmino;
  /**
   * Optional. Default labels that are added to the `labels` field of all log
   * entries in `entries`. If a log entry already has a label with the same key
   * as a label in this parameter, then the log entry's label is not changed.
   * See [LogEntry][google.logging.v2.LogEntry].
   */
  labels: {
    [key: string]: string;
  };
  /**
   * Required. The log entries to send to Logging. The order of log
   * entries in this list does not matter. Values supplied in this method's
   * `log_name`, `resource`, and `labels` fields are copied into those log
   * entries in this list that do not include values for their corresponding
   * fields. For more information, see the
   * [LogEntry][google.logging.v2.LogEntry] type.
   * 
   * If the `timestamp` or `insert_id` fields are missing in log entries, then
   * this method supplies the current time or a unique identifier, respectively.
   * The supplied values are chosen so that, among the log entries that did not
   * supply their own values, the entries earlier in the list will sort before
   * the entries later in the list. See the `entries.list` method.
   * 
   * Log entries with timestamps that are more than the
   * [logs retention period](https://cloud.google.com/logging/quotas) in
   * the past or more than 24 hours in the future will not be available when
   * calling `entries.list`. However, those log entries can still be [exported
   * with
   * LogSinks](https://cloud.google.com/logging/docs/api/tasks/exporting-logs).
   * 
   * To improve throughput and to avoid exceeding the
   * [quota limit](https://cloud.google.com/logging/quotas) for calls to
   * `entries.write`, you should try to include several log entries in this
   * list, rather than calling this method for each individual log entry.
   */
  entries: LogEntryAmino[];
  /**
   * Optional. Whether valid entries should be written even if some other
   * entries fail due to INVALID_ARGUMENT or PERMISSION_DENIED errors. If any
   * entry is not written, then the response status is the error associated
   * with one of the failed entries and the response includes error details
   * keyed by the entries' zero-based index in the `entries.write` method.
   */
  partial_success: boolean;
  /**
   * Optional. If true, the request should expect normal response, but the
   * entries won't be persisted nor exported. Useful for checking whether the
   * logging API endpoints are working properly before sending valuable data.
   */
  dry_run: boolean;
}
export interface WriteLogEntriesRequestAminoMsg {
  type: "/google.logging.v2.WriteLogEntriesRequest";
  value: WriteLogEntriesRequestAmino;
}
/** Result returned from WriteLogEntries. */
export interface WriteLogEntriesResponse {}
export interface WriteLogEntriesResponseProtoMsg {
  typeUrl: "/google.logging.v2.WriteLogEntriesResponse";
  value: Uint8Array;
}
/** Result returned from WriteLogEntries. */
export interface WriteLogEntriesResponseAmino {}
export interface WriteLogEntriesResponseAminoMsg {
  type: "/google.logging.v2.WriteLogEntriesResponse";
  value: WriteLogEntriesResponseAmino;
}
export interface WriteLogEntriesPartialErrors_LogEntryErrorsEntry {
  key: number;
  value?: Status;
}
export interface WriteLogEntriesPartialErrors_LogEntryErrorsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface WriteLogEntriesPartialErrors_LogEntryErrorsEntryAmino {
  key: number;
  value?: StatusAmino;
}
export interface WriteLogEntriesPartialErrors_LogEntryErrorsEntryAminoMsg {
  type: string;
  value: WriteLogEntriesPartialErrors_LogEntryErrorsEntryAmino;
}
/** Error details for WriteLogEntries with partial success. */
export interface WriteLogEntriesPartialErrors {
  /**
   * When `WriteLogEntriesRequest.partial_success` is true, records the error
   * status for entries that were not written due to a permanent error, keyed
   * by the entry's zero-based index in `WriteLogEntriesRequest.entries`.
   * 
   * Failed requests for which no entries are written will not include
   * per-entry errors.
   */
  logEntryErrors: {
    [key: number]: Status;
  };
}
export interface WriteLogEntriesPartialErrorsProtoMsg {
  typeUrl: "/google.logging.v2.WriteLogEntriesPartialErrors";
  value: Uint8Array;
}
/** Error details for WriteLogEntries with partial success. */
export interface WriteLogEntriesPartialErrorsAmino {
  /**
   * When `WriteLogEntriesRequest.partial_success` is true, records the error
   * status for entries that were not written due to a permanent error, keyed
   * by the entry's zero-based index in `WriteLogEntriesRequest.entries`.
   * 
   * Failed requests for which no entries are written will not include
   * per-entry errors.
   */
  log_entry_errors: {
    [key: number]: StatusAmino;
  };
}
export interface WriteLogEntriesPartialErrorsAminoMsg {
  type: "/google.logging.v2.WriteLogEntriesPartialErrors";
  value: WriteLogEntriesPartialErrorsAmino;
}
/** The parameters to `ListLogEntries`. */
export interface ListLogEntriesRequest {
  /**
   * Required. Names of one or more parent resources from which to
   * retrieve log entries:
   * 
   * *  `projects/[PROJECT_ID]`
   * *  `organizations/[ORGANIZATION_ID]`
   * *  `billingAccounts/[BILLING_ACCOUNT_ID]`
   * *  `folders/[FOLDER_ID]`
   * 
   * May alternatively be one or more views:
   * 
   *  * `projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`
   *  * `organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`
   *  * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`
   *  * `folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`
   * 
   * Projects listed in the `project_ids` field are added to this list.
   */
  resourceNames: string[];
  /**
   * Optional. A filter that chooses which log entries to return.  See [Advanced
   * Logs Queries](https://cloud.google.com/logging/docs/view/advanced-queries).
   * Only log entries that match the filter are returned.  An empty filter
   * matches all log entries in the resources listed in `resource_names`.
   * Referencing a parent resource that is not listed in `resource_names` will
   * cause the filter to return no results. The maximum length of the filter is
   * 20000 characters.
   */
  filter: string;
  /**
   * Optional. How the results should be sorted.  Presently, the only permitted
   * values are `"timestamp asc"` (default) and `"timestamp desc"`. The first
   * option returns entries in order of increasing values of
   * `LogEntry.timestamp` (oldest first), and the second option returns entries
   * in order of decreasing timestamps (newest first).  Entries with equal
   * timestamps are returned in order of their `insert_id` values.
   */
  orderBy: string;
  /**
   * Optional. The maximum number of results to return from this request. Default is 50.
   * If the value is negative or exceeds 1000, the request is rejected. The
   * presence of `next_page_token` in the response indicates that more results
   * might be available.
   */
  pageSize: number;
  /**
   * Optional. If present, then retrieve the next batch of results from the
   * preceding call to this method.  `page_token` must be the value of
   * `next_page_token` from the previous response.  The values of other method
   * parameters should be identical to those in the previous call.
   */
  pageToken: string;
}
export interface ListLogEntriesRequestProtoMsg {
  typeUrl: "/google.logging.v2.ListLogEntriesRequest";
  value: Uint8Array;
}
/** The parameters to `ListLogEntries`. */
export interface ListLogEntriesRequestAmino {
  /**
   * Required. Names of one or more parent resources from which to
   * retrieve log entries:
   * 
   * *  `projects/[PROJECT_ID]`
   * *  `organizations/[ORGANIZATION_ID]`
   * *  `billingAccounts/[BILLING_ACCOUNT_ID]`
   * *  `folders/[FOLDER_ID]`
   * 
   * May alternatively be one or more views:
   * 
   *  * `projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`
   *  * `organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`
   *  * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`
   *  * `folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`
   * 
   * Projects listed in the `project_ids` field are added to this list.
   */
  resource_names: string[];
  /**
   * Optional. A filter that chooses which log entries to return.  See [Advanced
   * Logs Queries](https://cloud.google.com/logging/docs/view/advanced-queries).
   * Only log entries that match the filter are returned.  An empty filter
   * matches all log entries in the resources listed in `resource_names`.
   * Referencing a parent resource that is not listed in `resource_names` will
   * cause the filter to return no results. The maximum length of the filter is
   * 20000 characters.
   */
  filter: string;
  /**
   * Optional. How the results should be sorted.  Presently, the only permitted
   * values are `"timestamp asc"` (default) and `"timestamp desc"`. The first
   * option returns entries in order of increasing values of
   * `LogEntry.timestamp` (oldest first), and the second option returns entries
   * in order of decreasing timestamps (newest first).  Entries with equal
   * timestamps are returned in order of their `insert_id` values.
   */
  order_by: string;
  /**
   * Optional. The maximum number of results to return from this request. Default is 50.
   * If the value is negative or exceeds 1000, the request is rejected. The
   * presence of `next_page_token` in the response indicates that more results
   * might be available.
   */
  page_size: number;
  /**
   * Optional. If present, then retrieve the next batch of results from the
   * preceding call to this method.  `page_token` must be the value of
   * `next_page_token` from the previous response.  The values of other method
   * parameters should be identical to those in the previous call.
   */
  page_token: string;
}
export interface ListLogEntriesRequestAminoMsg {
  type: "/google.logging.v2.ListLogEntriesRequest";
  value: ListLogEntriesRequestAmino;
}
/** Result returned from `ListLogEntries`. */
export interface ListLogEntriesResponse {
  /**
   * A list of log entries.  If `entries` is empty, `nextPageToken` may still be
   * returned, indicating that more entries may exist.  See `nextPageToken` for
   * more information.
   */
  entries: LogEntry[];
  /**
   * If there might be more results than those appearing in this response, then
   * `nextPageToken` is included.  To get the next set of results, call this
   * method again using the value of `nextPageToken` as `pageToken`.
   * 
   * If a value for `next_page_token` appears and the `entries` field is empty,
   * it means that the search found no log entries so far but it did not have
   * time to search all the possible log entries.  Retry the method with this
   * value for `page_token` to continue the search.  Alternatively, consider
   * speeding up the search by changing your filter to specify a single log name
   * or resource type, or to narrow the time range of the search.
   */
  nextPageToken: string;
}
export interface ListLogEntriesResponseProtoMsg {
  typeUrl: "/google.logging.v2.ListLogEntriesResponse";
  value: Uint8Array;
}
/** Result returned from `ListLogEntries`. */
export interface ListLogEntriesResponseAmino {
  /**
   * A list of log entries.  If `entries` is empty, `nextPageToken` may still be
   * returned, indicating that more entries may exist.  See `nextPageToken` for
   * more information.
   */
  entries: LogEntryAmino[];
  /**
   * If there might be more results than those appearing in this response, then
   * `nextPageToken` is included.  To get the next set of results, call this
   * method again using the value of `nextPageToken` as `pageToken`.
   * 
   * If a value for `next_page_token` appears and the `entries` field is empty,
   * it means that the search found no log entries so far but it did not have
   * time to search all the possible log entries.  Retry the method with this
   * value for `page_token` to continue the search.  Alternatively, consider
   * speeding up the search by changing your filter to specify a single log name
   * or resource type, or to narrow the time range of the search.
   */
  next_page_token: string;
}
export interface ListLogEntriesResponseAminoMsg {
  type: "/google.logging.v2.ListLogEntriesResponse";
  value: ListLogEntriesResponseAmino;
}
/** The parameters to ListMonitoredResourceDescriptors */
export interface ListMonitoredResourceDescriptorsRequest {
  /**
   * Optional. The maximum number of results to return from this request.
   * Non-positive values are ignored.  The presence of `nextPageToken` in the
   * response indicates that more results might be available.
   */
  pageSize: number;
  /**
   * Optional. If present, then retrieve the next batch of results from the
   * preceding call to this method.  `pageToken` must be the value of
   * `nextPageToken` from the previous response.  The values of other method
   * parameters should be identical to those in the previous call.
   */
  pageToken: string;
}
export interface ListMonitoredResourceDescriptorsRequestProtoMsg {
  typeUrl: "/google.logging.v2.ListMonitoredResourceDescriptorsRequest";
  value: Uint8Array;
}
/** The parameters to ListMonitoredResourceDescriptors */
export interface ListMonitoredResourceDescriptorsRequestAmino {
  /**
   * Optional. The maximum number of results to return from this request.
   * Non-positive values are ignored.  The presence of `nextPageToken` in the
   * response indicates that more results might be available.
   */
  page_size: number;
  /**
   * Optional. If present, then retrieve the next batch of results from the
   * preceding call to this method.  `pageToken` must be the value of
   * `nextPageToken` from the previous response.  The values of other method
   * parameters should be identical to those in the previous call.
   */
  page_token: string;
}
export interface ListMonitoredResourceDescriptorsRequestAminoMsg {
  type: "/google.logging.v2.ListMonitoredResourceDescriptorsRequest";
  value: ListMonitoredResourceDescriptorsRequestAmino;
}
/** Result returned from ListMonitoredResourceDescriptors. */
export interface ListMonitoredResourceDescriptorsResponse {
  /** A list of resource descriptors. */
  resourceDescriptors: MonitoredResourceDescriptor[];
  /**
   * If there might be more results than those appearing in this response, then
   * `nextPageToken` is included.  To get the next set of results, call this
   * method again using the value of `nextPageToken` as `pageToken`.
   */
  nextPageToken: string;
}
export interface ListMonitoredResourceDescriptorsResponseProtoMsg {
  typeUrl: "/google.logging.v2.ListMonitoredResourceDescriptorsResponse";
  value: Uint8Array;
}
/** Result returned from ListMonitoredResourceDescriptors. */
export interface ListMonitoredResourceDescriptorsResponseAmino {
  /** A list of resource descriptors. */
  resource_descriptors: MonitoredResourceDescriptorAmino[];
  /**
   * If there might be more results than those appearing in this response, then
   * `nextPageToken` is included.  To get the next set of results, call this
   * method again using the value of `nextPageToken` as `pageToken`.
   */
  next_page_token: string;
}
export interface ListMonitoredResourceDescriptorsResponseAminoMsg {
  type: "/google.logging.v2.ListMonitoredResourceDescriptorsResponse";
  value: ListMonitoredResourceDescriptorsResponseAmino;
}
/** The parameters to ListLogs. */
export interface ListLogsRequest {
  /**
   * Required. The resource name that owns the logs:
   * 
   * *  `projects/[PROJECT_ID]`
   * *  `organizations/[ORGANIZATION_ID]`
   * *  `billingAccounts/[BILLING_ACCOUNT_ID]`
   * *  `folders/[FOLDER_ID]`
   */
  parent: string;
  /**
   * Optional. The maximum number of results to return from this request.
   * Non-positive values are ignored.  The presence of `nextPageToken` in the
   * response indicates that more results might be available.
   */
  pageSize: number;
  /**
   * Optional. If present, then retrieve the next batch of results from the
   * preceding call to this method.  `pageToken` must be the value of
   * `nextPageToken` from the previous response.  The values of other method
   * parameters should be identical to those in the previous call.
   */
  pageToken: string;
  /**
   * Optional. The resource name that owns the logs:
   * 
   *  * `projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`
   *  * `organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`
   *  * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`
   *  * `folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`
   * 
   * To support legacy queries, it could also be:
   * 
   * *  `projects/[PROJECT_ID]`
   * *  `organizations/[ORGANIZATION_ID]`
   * *  `billingAccounts/[BILLING_ACCOUNT_ID]`
   * *  `folders/[FOLDER_ID]`
   */
  resourceNames: string[];
}
export interface ListLogsRequestProtoMsg {
  typeUrl: "/google.logging.v2.ListLogsRequest";
  value: Uint8Array;
}
/** The parameters to ListLogs. */
export interface ListLogsRequestAmino {
  /**
   * Required. The resource name that owns the logs:
   * 
   * *  `projects/[PROJECT_ID]`
   * *  `organizations/[ORGANIZATION_ID]`
   * *  `billingAccounts/[BILLING_ACCOUNT_ID]`
   * *  `folders/[FOLDER_ID]`
   */
  parent: string;
  /**
   * Optional. The maximum number of results to return from this request.
   * Non-positive values are ignored.  The presence of `nextPageToken` in the
   * response indicates that more results might be available.
   */
  page_size: number;
  /**
   * Optional. If present, then retrieve the next batch of results from the
   * preceding call to this method.  `pageToken` must be the value of
   * `nextPageToken` from the previous response.  The values of other method
   * parameters should be identical to those in the previous call.
   */
  page_token: string;
  /**
   * Optional. The resource name that owns the logs:
   * 
   *  * `projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`
   *  * `organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`
   *  * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`
   *  * `folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`
   * 
   * To support legacy queries, it could also be:
   * 
   * *  `projects/[PROJECT_ID]`
   * *  `organizations/[ORGANIZATION_ID]`
   * *  `billingAccounts/[BILLING_ACCOUNT_ID]`
   * *  `folders/[FOLDER_ID]`
   */
  resource_names: string[];
}
export interface ListLogsRequestAminoMsg {
  type: "/google.logging.v2.ListLogsRequest";
  value: ListLogsRequestAmino;
}
/** Result returned from ListLogs. */
export interface ListLogsResponse {
  /**
   * A list of log names. For example,
   * `"projects/my-project/logs/syslog"` or
   * `"organizations/123/logs/cloudresourcemanager.googleapis.com%2Factivity"`.
   */
  logNames: string[];
  /**
   * If there might be more results than those appearing in this response, then
   * `nextPageToken` is included.  To get the next set of results, call this
   * method again using the value of `nextPageToken` as `pageToken`.
   */
  nextPageToken: string;
}
export interface ListLogsResponseProtoMsg {
  typeUrl: "/google.logging.v2.ListLogsResponse";
  value: Uint8Array;
}
/** Result returned from ListLogs. */
export interface ListLogsResponseAmino {
  /**
   * A list of log names. For example,
   * `"projects/my-project/logs/syslog"` or
   * `"organizations/123/logs/cloudresourcemanager.googleapis.com%2Factivity"`.
   */
  log_names: string[];
  /**
   * If there might be more results than those appearing in this response, then
   * `nextPageToken` is included.  To get the next set of results, call this
   * method again using the value of `nextPageToken` as `pageToken`.
   */
  next_page_token: string;
}
export interface ListLogsResponseAminoMsg {
  type: "/google.logging.v2.ListLogsResponse";
  value: ListLogsResponseAmino;
}
/** The parameters to `TailLogEntries`. */
export interface TailLogEntriesRequest {
  /**
   * Required. Name of a parent resource from which to retrieve log entries:
   * 
   * *  `projects/[PROJECT_ID]`
   * *  `organizations/[ORGANIZATION_ID]`
   * *  `billingAccounts/[BILLING_ACCOUNT_ID]`
   * *  `folders/[FOLDER_ID]`
   * 
   * May alternatively be one or more views:
   * 
   *  * `projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`
   *  * `organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`
   *  * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`
   *  * `folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`
   */
  resourceNames: string[];
  /**
   * Optional. A filter that chooses which log entries to return.  See [Advanced
   * Logs Filters](https://cloud.google.com/logging/docs/view/advanced_filters).
   * Only log entries that match the filter are returned.  An empty filter
   * matches all log entries in the resources listed in `resource_names`.
   * Referencing a parent resource that is not in `resource_names` will cause
   * the filter to return no results. The maximum length of the filter is 20000
   * characters.
   */
  filter: string;
  /**
   * Optional. The amount of time to buffer log entries at the server before
   * being returned to prevent out of order results due to late arriving log
   * entries. Valid values are between 0-60000 milliseconds. Defaults to 2000
   * milliseconds.
   */
  bufferWindow?: Duration;
}
export interface TailLogEntriesRequestProtoMsg {
  typeUrl: "/google.logging.v2.TailLogEntriesRequest";
  value: Uint8Array;
}
/** The parameters to `TailLogEntries`. */
export interface TailLogEntriesRequestAmino {
  /**
   * Required. Name of a parent resource from which to retrieve log entries:
   * 
   * *  `projects/[PROJECT_ID]`
   * *  `organizations/[ORGANIZATION_ID]`
   * *  `billingAccounts/[BILLING_ACCOUNT_ID]`
   * *  `folders/[FOLDER_ID]`
   * 
   * May alternatively be one or more views:
   * 
   *  * `projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`
   *  * `organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`
   *  * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`
   *  * `folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`
   */
  resource_names: string[];
  /**
   * Optional. A filter that chooses which log entries to return.  See [Advanced
   * Logs Filters](https://cloud.google.com/logging/docs/view/advanced_filters).
   * Only log entries that match the filter are returned.  An empty filter
   * matches all log entries in the resources listed in `resource_names`.
   * Referencing a parent resource that is not in `resource_names` will cause
   * the filter to return no results. The maximum length of the filter is 20000
   * characters.
   */
  filter: string;
  /**
   * Optional. The amount of time to buffer log entries at the server before
   * being returned to prevent out of order results due to late arriving log
   * entries. Valid values are between 0-60000 milliseconds. Defaults to 2000
   * milliseconds.
   */
  buffer_window?: DurationAmino;
}
export interface TailLogEntriesRequestAminoMsg {
  type: "/google.logging.v2.TailLogEntriesRequest";
  value: TailLogEntriesRequestAmino;
}
/** Result returned from `TailLogEntries`. */
export interface TailLogEntriesResponse {
  /**
   * A list of log entries. Each response in the stream will order entries with
   * increasing values of `LogEntry.timestamp`. Ordering is not guaranteed
   * between separate responses.
   */
  entries: LogEntry[];
  /**
   * If entries that otherwise would have been included in the session were not
   * sent back to the client, counts of relevant entries omitted from the
   * session with the reason that they were not included. There will be at most
   * one of each reason per response. The counts represent the number of
   * suppressed entries since the last streamed response.
   */
  suppressionInfo: TailLogEntriesResponse_SuppressionInfo[];
}
export interface TailLogEntriesResponseProtoMsg {
  typeUrl: "/google.logging.v2.TailLogEntriesResponse";
  value: Uint8Array;
}
/** Result returned from `TailLogEntries`. */
export interface TailLogEntriesResponseAmino {
  /**
   * A list of log entries. Each response in the stream will order entries with
   * increasing values of `LogEntry.timestamp`. Ordering is not guaranteed
   * between separate responses.
   */
  entries: LogEntryAmino[];
  /**
   * If entries that otherwise would have been included in the session were not
   * sent back to the client, counts of relevant entries omitted from the
   * session with the reason that they were not included. There will be at most
   * one of each reason per response. The counts represent the number of
   * suppressed entries since the last streamed response.
   */
  suppression_info: TailLogEntriesResponse_SuppressionInfoAmino[];
}
export interface TailLogEntriesResponseAminoMsg {
  type: "/google.logging.v2.TailLogEntriesResponse";
  value: TailLogEntriesResponseAmino;
}
/** Information about entries that were omitted from the session. */
export interface TailLogEntriesResponse_SuppressionInfo {
  /** The reason that entries were omitted from the session. */
  reason: TailLogEntriesResponse_SuppressionInfo_Reason;
  /** A lower bound on the count of entries omitted due to `reason`. */
  suppressedCount: number;
}
export interface TailLogEntriesResponse_SuppressionInfoProtoMsg {
  typeUrl: "/google.logging.v2.SuppressionInfo";
  value: Uint8Array;
}
/** Information about entries that were omitted from the session. */
export interface TailLogEntriesResponse_SuppressionInfoAmino {
  /** The reason that entries were omitted from the session. */
  reason: TailLogEntriesResponse_SuppressionInfo_Reason;
  /** A lower bound on the count of entries omitted due to `reason`. */
  suppressed_count: number;
}
export interface TailLogEntriesResponse_SuppressionInfoAminoMsg {
  type: "/google.logging.v2.SuppressionInfo";
  value: TailLogEntriesResponse_SuppressionInfoAmino;
}
function createBaseDeleteLogRequest(): DeleteLogRequest {
  return {
    logName: ""
  };
}
export const DeleteLogRequest = {
  typeUrl: "/google.logging.v2.DeleteLogRequest",
  encode(message: DeleteLogRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.logName !== "") {
      writer.uint32(10).string(message.logName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DeleteLogRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteLogRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.logName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DeleteLogRequest>): DeleteLogRequest {
    const message = createBaseDeleteLogRequest();
    message.logName = object.logName ?? "";
    return message;
  },
  fromAmino(object: DeleteLogRequestAmino): DeleteLogRequest {
    const message = createBaseDeleteLogRequest();
    if (object.log_name !== undefined && object.log_name !== null) {
      message.logName = object.log_name;
    }
    return message;
  },
  toAmino(message: DeleteLogRequest): DeleteLogRequestAmino {
    const obj: any = {};
    obj.log_name = message.logName === "" ? undefined : message.logName;
    return obj;
  },
  fromAminoMsg(object: DeleteLogRequestAminoMsg): DeleteLogRequest {
    return DeleteLogRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: DeleteLogRequestProtoMsg): DeleteLogRequest {
    return DeleteLogRequest.decode(message.value);
  },
  toProto(message: DeleteLogRequest): Uint8Array {
    return DeleteLogRequest.encode(message).finish();
  },
  toProtoMsg(message: DeleteLogRequest): DeleteLogRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.DeleteLogRequest",
      value: DeleteLogRequest.encode(message).finish()
    };
  }
};
function createBaseWriteLogEntriesRequest_LabelsEntry(): WriteLogEntriesRequest_LabelsEntry {
  return {
    key: "",
    value: ""
  };
}
export const WriteLogEntriesRequest_LabelsEntry = {
  encode(message: WriteLogEntriesRequest_LabelsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WriteLogEntriesRequest_LabelsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWriteLogEntriesRequest_LabelsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<WriteLogEntriesRequest_LabelsEntry>): WriteLogEntriesRequest_LabelsEntry {
    const message = createBaseWriteLogEntriesRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: WriteLogEntriesRequest_LabelsEntryAmino): WriteLogEntriesRequest_LabelsEntry {
    const message = createBaseWriteLogEntriesRequest_LabelsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: WriteLogEntriesRequest_LabelsEntry): WriteLogEntriesRequest_LabelsEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: WriteLogEntriesRequest_LabelsEntryAminoMsg): WriteLogEntriesRequest_LabelsEntry {
    return WriteLogEntriesRequest_LabelsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: WriteLogEntriesRequest_LabelsEntryProtoMsg): WriteLogEntriesRequest_LabelsEntry {
    return WriteLogEntriesRequest_LabelsEntry.decode(message.value);
  },
  toProto(message: WriteLogEntriesRequest_LabelsEntry): Uint8Array {
    return WriteLogEntriesRequest_LabelsEntry.encode(message).finish();
  }
};
function createBaseWriteLogEntriesRequest(): WriteLogEntriesRequest {
  return {
    logName: "",
    resource: undefined,
    labels: {},
    entries: [],
    partialSuccess: false,
    dryRun: false
  };
}
export const WriteLogEntriesRequest = {
  typeUrl: "/google.logging.v2.WriteLogEntriesRequest",
  encode(message: WriteLogEntriesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.logName !== "") {
      writer.uint32(10).string(message.logName);
    }
    if (message.resource !== undefined) {
      MonitoredResource.encode(message.resource, writer.uint32(18).fork()).ldelim();
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      WriteLogEntriesRequest_LabelsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    for (const v of message.entries) {
      LogEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.partialSuccess === true) {
      writer.uint32(40).bool(message.partialSuccess);
    }
    if (message.dryRun === true) {
      writer.uint32(48).bool(message.dryRun);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WriteLogEntriesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWriteLogEntriesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.logName = reader.string();
          break;
        case 2:
          message.resource = MonitoredResource.decode(reader, reader.uint32());
          break;
        case 3:
          const entry3 = WriteLogEntriesRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.labels[entry3.key] = entry3.value;
          }
          break;
        case 4:
          message.entries.push(LogEntry.decode(reader, reader.uint32()));
          break;
        case 5:
          message.partialSuccess = reader.bool();
          break;
        case 6:
          message.dryRun = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<WriteLogEntriesRequest>): WriteLogEntriesRequest {
    const message = createBaseWriteLogEntriesRequest();
    message.logName = object.logName ?? "";
    message.resource = object.resource !== undefined && object.resource !== null ? MonitoredResource.fromPartial(object.resource) : undefined;
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.entries = object.entries?.map(e => LogEntry.fromPartial(e)) || [];
    message.partialSuccess = object.partialSuccess ?? false;
    message.dryRun = object.dryRun ?? false;
    return message;
  },
  fromAmino(object: WriteLogEntriesRequestAmino): WriteLogEntriesRequest {
    const message = createBaseWriteLogEntriesRequest();
    if (object.log_name !== undefined && object.log_name !== null) {
      message.logName = object.log_name;
    }
    if (object.resource !== undefined && object.resource !== null) {
      message.resource = MonitoredResource.fromAmino(object.resource);
    }
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.entries = object.entries?.map(e => LogEntry.fromAmino(e)) || [];
    if (object.partial_success !== undefined && object.partial_success !== null) {
      message.partialSuccess = object.partial_success;
    }
    if (object.dry_run !== undefined && object.dry_run !== null) {
      message.dryRun = object.dry_run;
    }
    return message;
  },
  toAmino(message: WriteLogEntriesRequest): WriteLogEntriesRequestAmino {
    const obj: any = {};
    obj.log_name = message.logName === "" ? undefined : message.logName;
    obj.resource = message.resource ? MonitoredResource.toAmino(message.resource) : undefined;
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? LogEntry.toAmino(e) : undefined);
    } else {
      obj.entries = message.entries;
    }
    obj.partial_success = message.partialSuccess === false ? undefined : message.partialSuccess;
    obj.dry_run = message.dryRun === false ? undefined : message.dryRun;
    return obj;
  },
  fromAminoMsg(object: WriteLogEntriesRequestAminoMsg): WriteLogEntriesRequest {
    return WriteLogEntriesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: WriteLogEntriesRequestProtoMsg): WriteLogEntriesRequest {
    return WriteLogEntriesRequest.decode(message.value);
  },
  toProto(message: WriteLogEntriesRequest): Uint8Array {
    return WriteLogEntriesRequest.encode(message).finish();
  },
  toProtoMsg(message: WriteLogEntriesRequest): WriteLogEntriesRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.WriteLogEntriesRequest",
      value: WriteLogEntriesRequest.encode(message).finish()
    };
  }
};
function createBaseWriteLogEntriesResponse(): WriteLogEntriesResponse {
  return {};
}
export const WriteLogEntriesResponse = {
  typeUrl: "/google.logging.v2.WriteLogEntriesResponse",
  encode(_: WriteLogEntriesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WriteLogEntriesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWriteLogEntriesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<WriteLogEntriesResponse>): WriteLogEntriesResponse {
    const message = createBaseWriteLogEntriesResponse();
    return message;
  },
  fromAmino(_: WriteLogEntriesResponseAmino): WriteLogEntriesResponse {
    const message = createBaseWriteLogEntriesResponse();
    return message;
  },
  toAmino(_: WriteLogEntriesResponse): WriteLogEntriesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: WriteLogEntriesResponseAminoMsg): WriteLogEntriesResponse {
    return WriteLogEntriesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: WriteLogEntriesResponseProtoMsg): WriteLogEntriesResponse {
    return WriteLogEntriesResponse.decode(message.value);
  },
  toProto(message: WriteLogEntriesResponse): Uint8Array {
    return WriteLogEntriesResponse.encode(message).finish();
  },
  toProtoMsg(message: WriteLogEntriesResponse): WriteLogEntriesResponseProtoMsg {
    return {
      typeUrl: "/google.logging.v2.WriteLogEntriesResponse",
      value: WriteLogEntriesResponse.encode(message).finish()
    };
  }
};
function createBaseWriteLogEntriesPartialErrors_LogEntryErrorsEntry(): WriteLogEntriesPartialErrors_LogEntryErrorsEntry {
  return {
    key: 0,
    value: undefined
  };
}
export const WriteLogEntriesPartialErrors_LogEntryErrorsEntry = {
  encode(message: WriteLogEntriesPartialErrors_LogEntryErrorsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      Status.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WriteLogEntriesPartialErrors_LogEntryErrorsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWriteLogEntriesPartialErrors_LogEntryErrorsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
          break;
        case 2:
          message.value = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<WriteLogEntriesPartialErrors_LogEntryErrorsEntry>): WriteLogEntriesPartialErrors_LogEntryErrorsEntry {
    const message = createBaseWriteLogEntriesPartialErrors_LogEntryErrorsEntry();
    message.key = object.key ?? 0;
    message.value = object.value !== undefined && object.value !== null ? Status.fromPartial(object.value) : undefined;
    return message;
  },
  fromAmino(object: WriteLogEntriesPartialErrors_LogEntryErrorsEntryAmino): WriteLogEntriesPartialErrors_LogEntryErrorsEntry {
    const message = createBaseWriteLogEntriesPartialErrors_LogEntryErrorsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Status.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: WriteLogEntriesPartialErrors_LogEntryErrorsEntry): WriteLogEntriesPartialErrors_LogEntryErrorsEntryAmino {
    const obj: any = {};
    obj.key = message.key === 0 ? undefined : message.key;
    obj.value = message.value ? Status.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: WriteLogEntriesPartialErrors_LogEntryErrorsEntryAminoMsg): WriteLogEntriesPartialErrors_LogEntryErrorsEntry {
    return WriteLogEntriesPartialErrors_LogEntryErrorsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: WriteLogEntriesPartialErrors_LogEntryErrorsEntryProtoMsg): WriteLogEntriesPartialErrors_LogEntryErrorsEntry {
    return WriteLogEntriesPartialErrors_LogEntryErrorsEntry.decode(message.value);
  },
  toProto(message: WriteLogEntriesPartialErrors_LogEntryErrorsEntry): Uint8Array {
    return WriteLogEntriesPartialErrors_LogEntryErrorsEntry.encode(message).finish();
  }
};
function createBaseWriteLogEntriesPartialErrors(): WriteLogEntriesPartialErrors {
  return {
    logEntryErrors: {}
  };
}
export const WriteLogEntriesPartialErrors = {
  typeUrl: "/google.logging.v2.WriteLogEntriesPartialErrors",
  encode(message: WriteLogEntriesPartialErrors, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    Object.entries(message.logEntryErrors).forEach(([key, value]) => {
      WriteLogEntriesPartialErrors_LogEntryErrorsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WriteLogEntriesPartialErrors {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWriteLogEntriesPartialErrors();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = WriteLogEntriesPartialErrors_LogEntryErrorsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.logEntryErrors[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<WriteLogEntriesPartialErrors>): WriteLogEntriesPartialErrors {
    const message = createBaseWriteLogEntriesPartialErrors();
    message.logEntryErrors = Object.entries(object.logEntryErrors ?? {}).reduce<{
      [key: number]: Status;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Status.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromAmino(object: WriteLogEntriesPartialErrorsAmino): WriteLogEntriesPartialErrors {
    const message = createBaseWriteLogEntriesPartialErrors();
    message.logEntryErrors = Object.entries(object.log_entry_errors ?? {}).reduce<{
      [key: number]: Status;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Status.fromAmino(value);
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message: WriteLogEntriesPartialErrors): WriteLogEntriesPartialErrorsAmino {
    const obj: any = {};
    obj.log_entry_errors = {};
    if (message.logEntryErrors) {
      Object.entries(message.logEntryErrors).forEach(([k, v]) => {
        obj.log_entry_errors[k] = Status.toAmino(v);
      });
    }
    return obj;
  },
  fromAminoMsg(object: WriteLogEntriesPartialErrorsAminoMsg): WriteLogEntriesPartialErrors {
    return WriteLogEntriesPartialErrors.fromAmino(object.value);
  },
  fromProtoMsg(message: WriteLogEntriesPartialErrorsProtoMsg): WriteLogEntriesPartialErrors {
    return WriteLogEntriesPartialErrors.decode(message.value);
  },
  toProto(message: WriteLogEntriesPartialErrors): Uint8Array {
    return WriteLogEntriesPartialErrors.encode(message).finish();
  },
  toProtoMsg(message: WriteLogEntriesPartialErrors): WriteLogEntriesPartialErrorsProtoMsg {
    return {
      typeUrl: "/google.logging.v2.WriteLogEntriesPartialErrors",
      value: WriteLogEntriesPartialErrors.encode(message).finish()
    };
  }
};
function createBaseListLogEntriesRequest(): ListLogEntriesRequest {
  return {
    resourceNames: [],
    filter: "",
    orderBy: "",
    pageSize: 0,
    pageToken: ""
  };
}
export const ListLogEntriesRequest = {
  typeUrl: "/google.logging.v2.ListLogEntriesRequest",
  encode(message: ListLogEntriesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.resourceNames) {
      writer.uint32(66).string(v!);
    }
    if (message.filter !== "") {
      writer.uint32(18).string(message.filter);
    }
    if (message.orderBy !== "") {
      writer.uint32(26).string(message.orderBy);
    }
    if (message.pageSize !== 0) {
      writer.uint32(32).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(42).string(message.pageToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListLogEntriesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListLogEntriesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 8:
          message.resourceNames.push(reader.string());
          break;
        case 2:
          message.filter = reader.string();
          break;
        case 3:
          message.orderBy = reader.string();
          break;
        case 4:
          message.pageSize = reader.int32();
          break;
        case 5:
          message.pageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ListLogEntriesRequest>): ListLogEntriesRequest {
    const message = createBaseListLogEntriesRequest();
    message.resourceNames = object.resourceNames?.map(e => e) || [];
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
  fromAmino(object: ListLogEntriesRequestAmino): ListLogEntriesRequest {
    const message = createBaseListLogEntriesRequest();
    message.resourceNames = object.resource_names?.map(e => e) || [];
    if (object.filter !== undefined && object.filter !== null) {
      message.filter = object.filter;
    }
    if (object.order_by !== undefined && object.order_by !== null) {
      message.orderBy = object.order_by;
    }
    if (object.page_size !== undefined && object.page_size !== null) {
      message.pageSize = object.page_size;
    }
    if (object.page_token !== undefined && object.page_token !== null) {
      message.pageToken = object.page_token;
    }
    return message;
  },
  toAmino(message: ListLogEntriesRequest): ListLogEntriesRequestAmino {
    const obj: any = {};
    if (message.resourceNames) {
      obj.resource_names = message.resourceNames.map(e => e);
    } else {
      obj.resource_names = message.resourceNames;
    }
    obj.filter = message.filter === "" ? undefined : message.filter;
    obj.order_by = message.orderBy === "" ? undefined : message.orderBy;
    obj.page_size = message.pageSize === 0 ? undefined : message.pageSize;
    obj.page_token = message.pageToken === "" ? undefined : message.pageToken;
    return obj;
  },
  fromAminoMsg(object: ListLogEntriesRequestAminoMsg): ListLogEntriesRequest {
    return ListLogEntriesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ListLogEntriesRequestProtoMsg): ListLogEntriesRequest {
    return ListLogEntriesRequest.decode(message.value);
  },
  toProto(message: ListLogEntriesRequest): Uint8Array {
    return ListLogEntriesRequest.encode(message).finish();
  },
  toProtoMsg(message: ListLogEntriesRequest): ListLogEntriesRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.ListLogEntriesRequest",
      value: ListLogEntriesRequest.encode(message).finish()
    };
  }
};
function createBaseListLogEntriesResponse(): ListLogEntriesResponse {
  return {
    entries: [],
    nextPageToken: ""
  };
}
export const ListLogEntriesResponse = {
  typeUrl: "/google.logging.v2.ListLogEntriesResponse",
  encode(message: ListLogEntriesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.entries) {
      LogEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListLogEntriesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListLogEntriesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(LogEntry.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<ListLogEntriesResponse>): ListLogEntriesResponse {
    const message = createBaseListLogEntriesResponse();
    message.entries = object.entries?.map(e => LogEntry.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
  fromAmino(object: ListLogEntriesResponseAmino): ListLogEntriesResponse {
    const message = createBaseListLogEntriesResponse();
    message.entries = object.entries?.map(e => LogEntry.fromAmino(e)) || [];
    if (object.next_page_token !== undefined && object.next_page_token !== null) {
      message.nextPageToken = object.next_page_token;
    }
    return message;
  },
  toAmino(message: ListLogEntriesResponse): ListLogEntriesResponseAmino {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? LogEntry.toAmino(e) : undefined);
    } else {
      obj.entries = message.entries;
    }
    obj.next_page_token = message.nextPageToken === "" ? undefined : message.nextPageToken;
    return obj;
  },
  fromAminoMsg(object: ListLogEntriesResponseAminoMsg): ListLogEntriesResponse {
    return ListLogEntriesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ListLogEntriesResponseProtoMsg): ListLogEntriesResponse {
    return ListLogEntriesResponse.decode(message.value);
  },
  toProto(message: ListLogEntriesResponse): Uint8Array {
    return ListLogEntriesResponse.encode(message).finish();
  },
  toProtoMsg(message: ListLogEntriesResponse): ListLogEntriesResponseProtoMsg {
    return {
      typeUrl: "/google.logging.v2.ListLogEntriesResponse",
      value: ListLogEntriesResponse.encode(message).finish()
    };
  }
};
function createBaseListMonitoredResourceDescriptorsRequest(): ListMonitoredResourceDescriptorsRequest {
  return {
    pageSize: 0,
    pageToken: ""
  };
}
export const ListMonitoredResourceDescriptorsRequest = {
  typeUrl: "/google.logging.v2.ListMonitoredResourceDescriptorsRequest",
  encode(message: ListMonitoredResourceDescriptorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pageSize !== 0) {
      writer.uint32(8).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListMonitoredResourceDescriptorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListMonitoredResourceDescriptorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pageSize = reader.int32();
          break;
        case 2:
          message.pageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ListMonitoredResourceDescriptorsRequest>): ListMonitoredResourceDescriptorsRequest {
    const message = createBaseListMonitoredResourceDescriptorsRequest();
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
  fromAmino(object: ListMonitoredResourceDescriptorsRequestAmino): ListMonitoredResourceDescriptorsRequest {
    const message = createBaseListMonitoredResourceDescriptorsRequest();
    if (object.page_size !== undefined && object.page_size !== null) {
      message.pageSize = object.page_size;
    }
    if (object.page_token !== undefined && object.page_token !== null) {
      message.pageToken = object.page_token;
    }
    return message;
  },
  toAmino(message: ListMonitoredResourceDescriptorsRequest): ListMonitoredResourceDescriptorsRequestAmino {
    const obj: any = {};
    obj.page_size = message.pageSize === 0 ? undefined : message.pageSize;
    obj.page_token = message.pageToken === "" ? undefined : message.pageToken;
    return obj;
  },
  fromAminoMsg(object: ListMonitoredResourceDescriptorsRequestAminoMsg): ListMonitoredResourceDescriptorsRequest {
    return ListMonitoredResourceDescriptorsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ListMonitoredResourceDescriptorsRequestProtoMsg): ListMonitoredResourceDescriptorsRequest {
    return ListMonitoredResourceDescriptorsRequest.decode(message.value);
  },
  toProto(message: ListMonitoredResourceDescriptorsRequest): Uint8Array {
    return ListMonitoredResourceDescriptorsRequest.encode(message).finish();
  },
  toProtoMsg(message: ListMonitoredResourceDescriptorsRequest): ListMonitoredResourceDescriptorsRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.ListMonitoredResourceDescriptorsRequest",
      value: ListMonitoredResourceDescriptorsRequest.encode(message).finish()
    };
  }
};
function createBaseListMonitoredResourceDescriptorsResponse(): ListMonitoredResourceDescriptorsResponse {
  return {
    resourceDescriptors: [],
    nextPageToken: ""
  };
}
export const ListMonitoredResourceDescriptorsResponse = {
  typeUrl: "/google.logging.v2.ListMonitoredResourceDescriptorsResponse",
  encode(message: ListMonitoredResourceDescriptorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.resourceDescriptors) {
      MonitoredResourceDescriptor.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListMonitoredResourceDescriptorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListMonitoredResourceDescriptorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resourceDescriptors.push(MonitoredResourceDescriptor.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<ListMonitoredResourceDescriptorsResponse>): ListMonitoredResourceDescriptorsResponse {
    const message = createBaseListMonitoredResourceDescriptorsResponse();
    message.resourceDescriptors = object.resourceDescriptors?.map(e => MonitoredResourceDescriptor.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
  fromAmino(object: ListMonitoredResourceDescriptorsResponseAmino): ListMonitoredResourceDescriptorsResponse {
    const message = createBaseListMonitoredResourceDescriptorsResponse();
    message.resourceDescriptors = object.resource_descriptors?.map(e => MonitoredResourceDescriptor.fromAmino(e)) || [];
    if (object.next_page_token !== undefined && object.next_page_token !== null) {
      message.nextPageToken = object.next_page_token;
    }
    return message;
  },
  toAmino(message: ListMonitoredResourceDescriptorsResponse): ListMonitoredResourceDescriptorsResponseAmino {
    const obj: any = {};
    if (message.resourceDescriptors) {
      obj.resource_descriptors = message.resourceDescriptors.map(e => e ? MonitoredResourceDescriptor.toAmino(e) : undefined);
    } else {
      obj.resource_descriptors = message.resourceDescriptors;
    }
    obj.next_page_token = message.nextPageToken === "" ? undefined : message.nextPageToken;
    return obj;
  },
  fromAminoMsg(object: ListMonitoredResourceDescriptorsResponseAminoMsg): ListMonitoredResourceDescriptorsResponse {
    return ListMonitoredResourceDescriptorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ListMonitoredResourceDescriptorsResponseProtoMsg): ListMonitoredResourceDescriptorsResponse {
    return ListMonitoredResourceDescriptorsResponse.decode(message.value);
  },
  toProto(message: ListMonitoredResourceDescriptorsResponse): Uint8Array {
    return ListMonitoredResourceDescriptorsResponse.encode(message).finish();
  },
  toProtoMsg(message: ListMonitoredResourceDescriptorsResponse): ListMonitoredResourceDescriptorsResponseProtoMsg {
    return {
      typeUrl: "/google.logging.v2.ListMonitoredResourceDescriptorsResponse",
      value: ListMonitoredResourceDescriptorsResponse.encode(message).finish()
    };
  }
};
function createBaseListLogsRequest(): ListLogsRequest {
  return {
    parent: "",
    pageSize: 0,
    pageToken: "",
    resourceNames: []
  };
}
export const ListLogsRequest = {
  typeUrl: "/google.logging.v2.ListLogsRequest",
  encode(message: ListLogsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    for (const v of message.resourceNames) {
      writer.uint32(66).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListLogsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListLogsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.pageSize = reader.int32();
          break;
        case 3:
          message.pageToken = reader.string();
          break;
        case 8:
          message.resourceNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ListLogsRequest>): ListLogsRequest {
    const message = createBaseListLogsRequest();
    message.parent = object.parent ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.resourceNames = object.resourceNames?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ListLogsRequestAmino): ListLogsRequest {
    const message = createBaseListLogsRequest();
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    }
    if (object.page_size !== undefined && object.page_size !== null) {
      message.pageSize = object.page_size;
    }
    if (object.page_token !== undefined && object.page_token !== null) {
      message.pageToken = object.page_token;
    }
    message.resourceNames = object.resource_names?.map(e => e) || [];
    return message;
  },
  toAmino(message: ListLogsRequest): ListLogsRequestAmino {
    const obj: any = {};
    obj.parent = message.parent === "" ? undefined : message.parent;
    obj.page_size = message.pageSize === 0 ? undefined : message.pageSize;
    obj.page_token = message.pageToken === "" ? undefined : message.pageToken;
    if (message.resourceNames) {
      obj.resource_names = message.resourceNames.map(e => e);
    } else {
      obj.resource_names = message.resourceNames;
    }
    return obj;
  },
  fromAminoMsg(object: ListLogsRequestAminoMsg): ListLogsRequest {
    return ListLogsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ListLogsRequestProtoMsg): ListLogsRequest {
    return ListLogsRequest.decode(message.value);
  },
  toProto(message: ListLogsRequest): Uint8Array {
    return ListLogsRequest.encode(message).finish();
  },
  toProtoMsg(message: ListLogsRequest): ListLogsRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.ListLogsRequest",
      value: ListLogsRequest.encode(message).finish()
    };
  }
};
function createBaseListLogsResponse(): ListLogsResponse {
  return {
    logNames: [],
    nextPageToken: ""
  };
}
export const ListLogsResponse = {
  typeUrl: "/google.logging.v2.ListLogsResponse",
  encode(message: ListLogsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.logNames) {
      writer.uint32(26).string(v!);
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListLogsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListLogsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.logNames.push(reader.string());
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
  fromPartial(object: DeepPartial<ListLogsResponse>): ListLogsResponse {
    const message = createBaseListLogsResponse();
    message.logNames = object.logNames?.map(e => e) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
  fromAmino(object: ListLogsResponseAmino): ListLogsResponse {
    const message = createBaseListLogsResponse();
    message.logNames = object.log_names?.map(e => e) || [];
    if (object.next_page_token !== undefined && object.next_page_token !== null) {
      message.nextPageToken = object.next_page_token;
    }
    return message;
  },
  toAmino(message: ListLogsResponse): ListLogsResponseAmino {
    const obj: any = {};
    if (message.logNames) {
      obj.log_names = message.logNames.map(e => e);
    } else {
      obj.log_names = message.logNames;
    }
    obj.next_page_token = message.nextPageToken === "" ? undefined : message.nextPageToken;
    return obj;
  },
  fromAminoMsg(object: ListLogsResponseAminoMsg): ListLogsResponse {
    return ListLogsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ListLogsResponseProtoMsg): ListLogsResponse {
    return ListLogsResponse.decode(message.value);
  },
  toProto(message: ListLogsResponse): Uint8Array {
    return ListLogsResponse.encode(message).finish();
  },
  toProtoMsg(message: ListLogsResponse): ListLogsResponseProtoMsg {
    return {
      typeUrl: "/google.logging.v2.ListLogsResponse",
      value: ListLogsResponse.encode(message).finish()
    };
  }
};
function createBaseTailLogEntriesRequest(): TailLogEntriesRequest {
  return {
    resourceNames: [],
    filter: "",
    bufferWindow: undefined
  };
}
export const TailLogEntriesRequest = {
  typeUrl: "/google.logging.v2.TailLogEntriesRequest",
  encode(message: TailLogEntriesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.resourceNames) {
      writer.uint32(10).string(v!);
    }
    if (message.filter !== "") {
      writer.uint32(18).string(message.filter);
    }
    if (message.bufferWindow !== undefined) {
      Duration.encode(message.bufferWindow, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TailLogEntriesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTailLogEntriesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resourceNames.push(reader.string());
          break;
        case 2:
          message.filter = reader.string();
          break;
        case 3:
          message.bufferWindow = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TailLogEntriesRequest>): TailLogEntriesRequest {
    const message = createBaseTailLogEntriesRequest();
    message.resourceNames = object.resourceNames?.map(e => e) || [];
    message.filter = object.filter ?? "";
    message.bufferWindow = object.bufferWindow !== undefined && object.bufferWindow !== null ? Duration.fromPartial(object.bufferWindow) : undefined;
    return message;
  },
  fromAmino(object: TailLogEntriesRequestAmino): TailLogEntriesRequest {
    const message = createBaseTailLogEntriesRequest();
    message.resourceNames = object.resource_names?.map(e => e) || [];
    if (object.filter !== undefined && object.filter !== null) {
      message.filter = object.filter;
    }
    if (object.buffer_window !== undefined && object.buffer_window !== null) {
      message.bufferWindow = Duration.fromAmino(object.buffer_window);
    }
    return message;
  },
  toAmino(message: TailLogEntriesRequest): TailLogEntriesRequestAmino {
    const obj: any = {};
    if (message.resourceNames) {
      obj.resource_names = message.resourceNames.map(e => e);
    } else {
      obj.resource_names = message.resourceNames;
    }
    obj.filter = message.filter === "" ? undefined : message.filter;
    obj.buffer_window = message.bufferWindow ? Duration.toAmino(message.bufferWindow) : undefined;
    return obj;
  },
  fromAminoMsg(object: TailLogEntriesRequestAminoMsg): TailLogEntriesRequest {
    return TailLogEntriesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: TailLogEntriesRequestProtoMsg): TailLogEntriesRequest {
    return TailLogEntriesRequest.decode(message.value);
  },
  toProto(message: TailLogEntriesRequest): Uint8Array {
    return TailLogEntriesRequest.encode(message).finish();
  },
  toProtoMsg(message: TailLogEntriesRequest): TailLogEntriesRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.TailLogEntriesRequest",
      value: TailLogEntriesRequest.encode(message).finish()
    };
  }
};
function createBaseTailLogEntriesResponse(): TailLogEntriesResponse {
  return {
    entries: [],
    suppressionInfo: []
  };
}
export const TailLogEntriesResponse = {
  typeUrl: "/google.logging.v2.TailLogEntriesResponse",
  encode(message: TailLogEntriesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.entries) {
      LogEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.suppressionInfo) {
      TailLogEntriesResponse_SuppressionInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TailLogEntriesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTailLogEntriesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(LogEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.suppressionInfo.push(TailLogEntriesResponse_SuppressionInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TailLogEntriesResponse>): TailLogEntriesResponse {
    const message = createBaseTailLogEntriesResponse();
    message.entries = object.entries?.map(e => LogEntry.fromPartial(e)) || [];
    message.suppressionInfo = object.suppressionInfo?.map(e => TailLogEntriesResponse_SuppressionInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TailLogEntriesResponseAmino): TailLogEntriesResponse {
    const message = createBaseTailLogEntriesResponse();
    message.entries = object.entries?.map(e => LogEntry.fromAmino(e)) || [];
    message.suppressionInfo = object.suppression_info?.map(e => TailLogEntriesResponse_SuppressionInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TailLogEntriesResponse): TailLogEntriesResponseAmino {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? LogEntry.toAmino(e) : undefined);
    } else {
      obj.entries = message.entries;
    }
    if (message.suppressionInfo) {
      obj.suppression_info = message.suppressionInfo.map(e => e ? TailLogEntriesResponse_SuppressionInfo.toAmino(e) : undefined);
    } else {
      obj.suppression_info = message.suppressionInfo;
    }
    return obj;
  },
  fromAminoMsg(object: TailLogEntriesResponseAminoMsg): TailLogEntriesResponse {
    return TailLogEntriesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: TailLogEntriesResponseProtoMsg): TailLogEntriesResponse {
    return TailLogEntriesResponse.decode(message.value);
  },
  toProto(message: TailLogEntriesResponse): Uint8Array {
    return TailLogEntriesResponse.encode(message).finish();
  },
  toProtoMsg(message: TailLogEntriesResponse): TailLogEntriesResponseProtoMsg {
    return {
      typeUrl: "/google.logging.v2.TailLogEntriesResponse",
      value: TailLogEntriesResponse.encode(message).finish()
    };
  }
};
function createBaseTailLogEntriesResponse_SuppressionInfo(): TailLogEntriesResponse_SuppressionInfo {
  return {
    reason: 0,
    suppressedCount: 0
  };
}
export const TailLogEntriesResponse_SuppressionInfo = {
  typeUrl: "/google.logging.v2.SuppressionInfo",
  encode(message: TailLogEntriesResponse_SuppressionInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reason !== 0) {
      writer.uint32(8).int32(message.reason);
    }
    if (message.suppressedCount !== 0) {
      writer.uint32(16).int32(message.suppressedCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TailLogEntriesResponse_SuppressionInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTailLogEntriesResponse_SuppressionInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reason = (reader.int32() as any);
          break;
        case 2:
          message.suppressedCount = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TailLogEntriesResponse_SuppressionInfo>): TailLogEntriesResponse_SuppressionInfo {
    const message = createBaseTailLogEntriesResponse_SuppressionInfo();
    message.reason = object.reason ?? 0;
    message.suppressedCount = object.suppressedCount ?? 0;
    return message;
  },
  fromAmino(object: TailLogEntriesResponse_SuppressionInfoAmino): TailLogEntriesResponse_SuppressionInfo {
    const message = createBaseTailLogEntriesResponse_SuppressionInfo();
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    if (object.suppressed_count !== undefined && object.suppressed_count !== null) {
      message.suppressedCount = object.suppressed_count;
    }
    return message;
  },
  toAmino(message: TailLogEntriesResponse_SuppressionInfo): TailLogEntriesResponse_SuppressionInfoAmino {
    const obj: any = {};
    obj.reason = message.reason === 0 ? undefined : message.reason;
    obj.suppressed_count = message.suppressedCount === 0 ? undefined : message.suppressedCount;
    return obj;
  },
  fromAminoMsg(object: TailLogEntriesResponse_SuppressionInfoAminoMsg): TailLogEntriesResponse_SuppressionInfo {
    return TailLogEntriesResponse_SuppressionInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: TailLogEntriesResponse_SuppressionInfoProtoMsg): TailLogEntriesResponse_SuppressionInfo {
    return TailLogEntriesResponse_SuppressionInfo.decode(message.value);
  },
  toProto(message: TailLogEntriesResponse_SuppressionInfo): Uint8Array {
    return TailLogEntriesResponse_SuppressionInfo.encode(message).finish();
  },
  toProtoMsg(message: TailLogEntriesResponse_SuppressionInfo): TailLogEntriesResponse_SuppressionInfoProtoMsg {
    return {
      typeUrl: "/google.logging.v2.SuppressionInfo",
      value: TailLogEntriesResponse_SuppressionInfo.encode(message).finish()
    };
  }
};